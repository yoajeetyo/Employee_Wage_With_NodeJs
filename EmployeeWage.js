console.log("Welcome to Employee wage program")
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOUR = 4;
const FULL_TIME_HOUR = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;
let totalEmpHrs = 0;

function getWorkingHours(empCheck) {
switch(empCheck) {
case IS_PART_TIME :
    return PART_TIME_HOUR;
case IS_FULL_TIME :
    return FULL_TIME_HOUR;
default :
    return 0;
}
}

for (let day = 0; day < NUM_OF_WORKING_DAYS; day++) {
    let empCheck = Math.floor(Math.random()*10)%3; 
    totalEmpHrs += getWorkingHours(empCheck);
}


let empWage = totalEmpHrs*WAGE_PER_HOUR;
console.log("Total Employee Hour : "+totalEmpHrs+" Total Employee wage is : "+empWage);