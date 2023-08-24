/*

*/

let hours = prompt("Enter nunber of hours worked:");
let rate = prompt("Enter hourly rate:");

var salary = hours * rate;
var transport = 40;
var minimum = 500;
var tsalary;


if (salary < minimum) {
        tsalary = salary + 40 + "\rInclusive of transport allowance of $40.";
    } else {
        tsalary = salary; 
}

alert("You have entered:" + "\n======================================\n" 
      + "Hours worked: " + hours + "\n" 
      + "Hourly rate: $" 
      + rate + "\n======================================\n" 
      + "Total Salary: $" + String(tsalary));

