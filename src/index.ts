import {
  getFormattedToday,
  getFormattedFutureDate,
} from "./helpers/date-helper";

function main(): void {
  console.log("Hello world from Bun + TypeScript");
  console.log("Current date:", getFormattedToday());
  console.log("Date 7 days from now:", getFormattedFutureDate(7));
}

main();
