export interface Partner {
  name: string;
  src: string;
  type: "mno" | "bank" | "card";
  /** Visual height in px when rendered at base scale. */
  h: number;
}

// Curated set: 5 MNOs + 2 banks. The card networks (Visa/Mastercard) are kept
// available for the Malipopay rails grid only, not the homepage.
export const partners: Partner[] = [
  { name: "M-Pesa", src: "/partners/MPesa.svg", type: "mno", h: 56 },
  { name: "Mixx by YAS", src: "/partners/Tigo Pesa.svg", type: "mno", h: 56 },
  { name: "Airtel Money", src: "/partners/AirtelMoney.svg", type: "mno", h: 56 },
  { name: "Halopesa", src: "/partners/Halopesa.svg", type: "mno", h: 56 },
  { name: "T-Pesa", src: "/partners/T-Pesa.svg", type: "mno", h: 56 },
  { name: "CRDB Bank", src: "/partners/Crdb Bank Plc.svg", type: "bank", h: 56 },
  { name: "NMB Bank", src: "/partners/National Microfinance Bank.svg", type: "bank", h: 56 },
];

export const cardPartners: Partner[] = [
  { name: "Visa", src: "/partners/visa.svg", type: "card", h: 22 },
  { name: "Mastercard", src: "/partners/mastercard.svg", type: "card", h: 32 },
];
