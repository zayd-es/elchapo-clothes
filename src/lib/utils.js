import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const API_URL = 'https://celebrated-spirit-7a9f04a7e1.strapiapp.com/api'