console.log("Welcome to Employee wage program")
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOUR = 4;
const FULL_TIME_HOUR = 8;
const WAGE_PER_HOUR = 20;
let empHrs = 0;
let empCheck = Math.floor(Math.random()*10)%3;
switch(empCheck) {
case IS_PART_TIME :
    empHrs = PART_TIME_HOUR;
    break;
case IS_FULL_TIME :
    empHrs = FULL_TIME_HOUR;
    break;
default :
empHrs = 0;
break;

}

let empWage = empHrs*WAGE_PER_HOUR;
console.log("Employee wage is : "+empWage);