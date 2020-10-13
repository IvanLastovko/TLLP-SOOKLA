export default function getTotalAmountOfWeeksInAYear(y) {
   var d, isLeap;

   d = new Date(y, 0, 1);
   isLeap = new Date(y, 1, 29).getMonth() === 1;

   //check for a Jan 1 that's a Thursday or a leap year that has a
   //Wednesday jan 1. Otherwise it's 52
   return d.getDay() === 4 || (isLeap && d.getDay() === 3) ? 53 : 52
}