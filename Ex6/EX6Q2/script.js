/** 
 * ---------------------------------------------------------------------------- 
 *  Title: IT8083_EX6Q2_P7460509
 *  Desc: Add new members
 *  Author: Priya d/o Manoharan (Student ID: P7460509)
 *  Class: DICS1/CE/2022/1
 *  Date: 17-July-2022
 *  ---------------------------------------------------------------------------
**/


//-------Variable Delaration------
// b) Declare a member array (name it as memArray) for storing the member objects in it.
var memArray = []; 
var msg; 

//------functions-----------
// (a)Declare a member object (name it as MemberObj) Constructor or Template to hold the
// following information:
// (i) id
// (ii) name
// (iii) mobileNum
function MemberObj(id, name, mobileNum) {
    this.id = id;
    this.name = name;
    this.mobileNum = mobileNum;
}

function CustomCreateMember(uMemID, uMemName, uMemMobileNum) {
    var member = new MemberObj(uMemID, uMemName, uMemMobileNum);
    memArray.push(member);
}

//------functions-----------
// (i) id - add value at the input box
// (ii) name - add value at the input box
// (iii) mobileNum - add value at the input box
function addMember() {
    var uMemID = document.getElementById("memID").value;
    var uMemName = document.getElementById("memName").value;
    var uMemMobileNum = document.getElementById("memMobileNum").value;
    CustomCreateMember(uMemID, uMemName, uMemMobileNum);

}

// ------- EX6Q2 - Continue from EX5Q1
// D) Print out all THRESS records in ONE single console.log 
function printHTMLTable() {
    // Print out all three records in one single console.log using a variable msg.
	msg = "<table id='myTable' border='1'><thead><tr><th>ID</th><th>Name</th><th>Member Mobile No.</th></tr></thead>";

    for(let i=0; i<memArray.length; i++){
        
        msg += "<tr><td>" + memArray[i].id + "</td>" 
             + "<td>" + memArray[i].name + "</td>" 
             + "<td>" + memArray[i].mobileNum + "</td></tr>";
	}
    msg += "</table>";
    return msg;
}

// ------- Print members array message to HTML -----------
function listMembers() {
    console.log("listMembers() being called");
    document.getElementById("target").innerHTML = printHTMLTable();
}    


// ===================== Start of Main =====================

printHTMLTable();
console.log(msg);


// ===================== End of Main =====================
