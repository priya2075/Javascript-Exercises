/** 
 *  ---------------------------------------------------------------------------- 
 *  Title: IT8083_EX6Q1_P7460509
 *  Desc: add Event Listener
 *  Author: Priya d/o Manoharan (Student ID: P7460509)
 *  Class: DICS1/CE/2022/1
 *  Date: 17-July-2022
 *  ---------------------------------------------------------------------------- 
**/


//-------Variable Delaration------
// b) Declare a member array (name it as memArray) for storing the member objects in it.
var memArray = []; // an array (name it as memArray) for storing the member details
var msg; // this variable is to display member information of the users

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

function createMembers() {
    // c) Create three (3) member Objects (e.g. member1, member2, etc.) with fictitious member
    // properties such as:
    // id name mobileNum
    // m001 John 91234567
    // m002 Mary 92345678
    // m003 Charlie 93456789
    var member1 = new MemberObj("m001", "John ", " 9123 4567");
    var member2 = new MemberObj("m002", "Mary", " 9234 5678");
    var member3 = new MemberObj("m003", "Charlie", "9345 6789");

    // d) Store the newly created member Objects into the member array declared in (b).
    memArray = [member1, member2, member3];
    console.log("myArray:", memArray);
}

// ------- EX5Q2 - Continue from EX5Q1
// D) Print out all THRESS records in ONE single console.log 
function prepareHTMLMsg() {
    // Print out all three records in one single console.log using a variable msg.
	msg = "<table id='myTable' border='1'><thead><tr><th>ID</th><th>Name</th><th>Mobile No.</th></tr></thead>";

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
    document.getElementById("target").innerHTML = prepareHTMLMsg();
}    

// ------- add event listener to button -----------
document.getElementById("autoGenMemBtn").addEventListener("click", createMembers);


// ===================== Start of Main =====================
console.log(msg);
prepareHTMLMsg();


// ===================== End of Main =====================
