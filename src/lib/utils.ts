import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const calculateExperience = (): string => {
  const startDate = new Date(2021, 7); // August 2021 (month index starts from 0)
  const currentDate = new Date();

  let years = currentDate.getFullYear() - startDate.getFullYear();
  let months = currentDate.getMonth() - startDate.getMonth();

  if (months < 0) {
    years--;
    months += 12;
  }

  if (years > 0) {
    return `${years} year${years > 1 ? "s" : ""}${
      months > 0 ? ` ${months} month${months > 1 ? "s" : ""}` : ""
    }`;
  }
  return `${months} month${months > 1 ? "s" : ""}`;
};