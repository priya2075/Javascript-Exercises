/** 
 * ---------------------------------------------------------------
 *  Title: IT8083_EX3Q2_P7460509
 *  Desc: Reverse Anything
 *  Author: Priya d/o Manoharan (Student ID: P7460509)
 *  Class: DICS1/CE/2022/1
 *  Date: 29-May-2022
 *  --------------------------------------------------------------- 
**/


function rsvrBtn() {

    // ---------- Declaration of variables ---------- 
    let text, delimiter;
    var alert_msg = "You have entered:\n--------------------------------------------------------------------------\n",
        br = "\n--------------------------------------------------------------------------\r";

    // ---------- [START] Declaration of Text ----------
    function outputPrompt() {  
        
        // ---------- Window Prompt ---------- 
        function getUserInputs() {

            text = window.prompt("Enter text to reverse:");
            delimiter = window.prompt("Enter a delimiter:");    
            
        }getUserInputs();

        // ---------- Split the string ---------- 
        function splitFunc() {
        
            // reference: https://stackoverflow.com/questions/22075140/am-i-doing-this-split-reverse-join-correctly
            const textArray = text.split("").reverse().join(delimiter);
            result = textArray;
        
        }splitFunc();
  

        // ---------- Print Message ---------- 
        function printMessage() {
        
            alert_msg = alert_msg + "String: " + "' " + String(text) + " '" + " \n";
            alert_msg += "Delimiter: " + "' " + String(delimiter) + " '" + br + "The reversed text says: " + String(result);

            // source: https://www.codegrepper.com/code-examples/javascript/javascript+check+if+input+is+empty
            if (!text || !delimiter) {
                window.alert("Please fill in the required fields.");
                return false;
            }
            window.alert(alert_msg);

        }printMessage();
        
    }outputPrompt(); 
    // ---------- [END] Declaration of Functions ----------    
}

