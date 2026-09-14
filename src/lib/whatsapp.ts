import { whatsappNumber } from "@/data/company";

export function whatsappLink(message: string, number: string = whatsappNumber) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
