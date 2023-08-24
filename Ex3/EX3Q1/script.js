/** 
 * ---------------------------------------------------------------
 *  Title: IT8083_EX3Q1_P7460509
 *  Desc: Organise codes into Functions
 *  Author: Priya d/o Manoharan (Student ID: P7460509)
 *  Class: DICS1/CE/2022/1
 *  Date: 29-May-2022
 *  --------------------------------------------------------------- 
**/


// ---------- Declare Button ----------
function salaryCal() {

    // ---------- Declaration of Variables ----------
    var hours_worked, 
        rate, 
        salary, 
        total_salary, 
        alert_msg = "You have entered:\n--------------------------------------------------------------------------\n", 
        br = "\n--------------------------------------------------------------------------\r";
        transport = 40, 
        minimum = 500;

    // ---------- [START] Declaration of Functions ----------
    function getUserInputs() {
        hours_worked = Number(window.prompt("Enter the number of hours worked:")); 
        rate = Number(window.prompt("Enter the hourly rate:")); 
        salary = hours_worked * rate;
    }

    function checkSalary() {
        if (salary < minimum) {
            total_salary = salary + transport + "\rInclusive of transport allowance: $40."; 
        } else {
            total_salary = salary; 
        }
    }

    function printMessage() {
        alert_msg = alert_msg + "Number of hours worked: " + hours_worked + " Hours \n";
        alert_msg += "Hourly rate: $" + rate + br + "Your salary is: $" + String(total_salary);

        // source: https://www.codegrepper.com/code-examples/javascript/javascript+check+if+input+is+empty
        if (!hours_worked || !rate) {
            window.alert("Please fill in the required fields.");
            return false;
        }
        window.alert(alert_msg);
    }
    // ---------- [END] Declaration of Functions ----------

    // ---------- MAIN Program ----------
    getUserInputs();
    checkSalary();
    printMessage();
    
}

