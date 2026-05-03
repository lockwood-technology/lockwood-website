export interface NavItem {
  id: string;
  label: string;
  href: string;
  hasMenu?: boolean;
}

export const mainNav: NavItem[] = [
  { id: "services", label: "What we do", href: "/services" },
  { id: "products", label: "Products", href: "#", hasMenu: true },
  { id: "work", label: "Case studies", href: "/work" },
  { id: "about", label: "About", href: "/about" },
  { id: "contact", label: "Contact", href: "/contact" },
];

export const footerNav = {
  Products: [
    { label: "Malipopay", href: "/products/malipopay" },
    { label: "Wedding", href: "/products/wedding" },
    { label: "Send", href: "/products/send" },
    { label: "Link", href: "/products/link" },
    { label: "Housing", href: "/products/housing" },
    { label: "Localhost", href: "/products/localhost" },
    { label: "Investors", href: "/products/investors" },
    { label: "Kikaba", href: "/products/kikaba" },
    { label: "Drivers", href: "/products/drivers" },
    { label: "Mchango", href: "/products/mchango" },
    { label: "FungulaKumi", href: "/products/fungulakumi" },
    { label: "Mziki", href: "/products/mziki" },
  ],
  Services: [
    { label: "Platform Development", href: "/services#platform" },
    { label: "E-Commerce Solutions", href: "/services#ecommerce" },
    { label: "Payment Integration", href: "/services#payments" },
    { label: "UI/UX Design", href: "/services#design" },
    { label: "Branding", href: "/services#branding" },
    { label: "Digital Marketing", href: "/services#marketing" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Case studies", href: "/work" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ],
  Legal: [
    { label: "Terms", href: "#" },
    { label: "Privacy", href: "#" },
  ],
};
