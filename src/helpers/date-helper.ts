import { format, addDays } from "date-fns";

/**
 * Returns today's date in a readable format.
 */
export function getFormattedToday(): string {
  return format(new Date(), "yyyy-MM-dd HH:mm:ss");
}

/**
 * Returns a formatted date N days from now.
 */
export function getFormattedFutureDate(daysToAdd: number): string {
  return format(addDays(new Date(), daysToAdd), "yyyy-MM-dd");
}
