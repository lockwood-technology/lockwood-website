import mixpanel from 'mixpanel-browser';
import * as amplitude from '@amplitude/analytics-browser';

let initialized = false;

const MIXPANEL_TOKEN = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN;
const AMPLITUDE_KEY = process.env.NEXT_PUBLIC_AMPLITUDE_API_KEY;

export function initAnalytics() {
  if (typeof window === 'undefined' || initialized) return;

  if (MIXPANEL_TOKEN && MIXPANEL_TOKEN !== 'your_mixpanel_token') {
    mixpanel.init(MIXPANEL_TOKEN, {
      track_pageview: false,
      persistence: 'localStorage',
    });
    // Tag all events with project source
    mixpanel.register({
      source: 'Lockwood Marketing Site',
      platform: 'web',
      domain: window.location.hostname,
    });
  }

  if (AMPLITUDE_KEY && AMPLITUDE_KEY !== 'your_amplitude_api_key') {
    amplitude.init(AMPLITUDE_KEY, {
      autocapture: { elementInteractions: false },
    });
    // Tag all events with project source
    const identifyObj = new amplitude.Identify();
    identifyObj.setOnce('source', 'Lockwood Marketing Site');
    identifyObj.setOnce('platform', 'web');
    amplitude.identify(identifyObj);
  }

  initialized = true;
}

export function trackEvent(
  eventName: string,
  properties?: Record<string, string | number | boolean>
) {
  if (typeof window === 'undefined') return;

  const props = {
    ...properties,
    source: 'Lockwood Marketing Site',
    timestamp: new Date().toISOString(),
  };

  if (MIXPANEL_TOKEN && MIXPANEL_TOKEN !== 'your_mixpanel_token') {
    mixpanel.track(eventName, props);
  }

  if (AMPLITUDE_KEY && AMPLITUDE_KEY !== 'your_amplitude_api_key') {
    amplitude.track(eventName, props);
  }
}

export function trackPageView(url: string) {
  trackEvent('page_viewed', {
    url,
    referrer: typeof document !== 'undefined' ? document.referrer : '',
  });
}

export function identifyUser(
  userId: string,
  traits?: Record<string, string | number | boolean>
) {
  if (typeof window === 'undefined') return;

  if (MIXPANEL_TOKEN && MIXPANEL_TOKEN !== 'your_mixpanel_token') {
    mixpanel.identify(userId);
    if (traits) mixpanel.people.set(traits);
  }

  if (AMPLITUDE_KEY && AMPLITUDE_KEY !== 'your_amplitude_api_key') {
    amplitude.setUserId(userId);
    if (traits) {
      const identifyObj = new amplitude.Identify();
      Object.entries(traits).forEach(([key, value]) => {
        identifyObj.set(key, value);
      });
      amplitude.identify(identifyObj);
    }
  }
}
