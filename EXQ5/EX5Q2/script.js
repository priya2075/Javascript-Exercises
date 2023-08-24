/** 
 * -----------------------------Comment header----------------------------------
 *  Title: IT8083_EX5Q2_P7460509
 *  Desc: DOM Method
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
    // Declare a member object (name it as MemberObj) Constructor or Template
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
    var member1 = new MemberObj("m001", "John ", " 91234567");
    var member2 = new MemberObj("m002", "Mary", " 92345678");
    var member3 = new MemberObj("m003", "Charlie", "93456789");

    // d) Store the newly created member Objects into the member array declared in (b).
    // memArray = [member1, member2, member3]; 
    // method #1 to store objs to array
    memArray.push(member1);
    memArray.push(member2);
    memArray.push(member3);
}

// D) Print out all THRESS records in ONE single console.log 
function prepareMessage() {
    msg = "ID     |     NAME     |     Mobile Number\n";
    msg += "--------------------------------------------------\n";
    msg += memArray[0].id +  "  " + memArray[0].name +  "  " + memArray[0].mobileNum + "\n";
    msg += memArray[1].id +  "  " + memArray[1].name +  "  " + memArray[1].mobileNum + "\n";
    msg += memArray[2].id +  "  " + memArray[2].name +  "  " + memArray[2].mobileNum + "\n";
}



// ------- EX5Q1 - Continue from EX4Q2 - function to custom create member obj, and push it into the memberArray
function CustomCreateMember(mid, mName, mMobile) {
    var member = new MemberObj(mid, mName, mMobile);
    memArray.push(member);
}

// Function to prompt user for new member info and call the customCreateMemberSSS
function addMember() {
    // prompt user to create for custom member objects
    var uMemID = window.prompt("Enter member ID:");
    var uMemName = window.prompt("Enter member Name:");
    var uMemMobile = window.prompt("Enter member mobile number:");
    CustomCreateMember(uMemID, uMemName, uMemMobile);
}

// ------- EX5Q2 - Continue from EX5Q1
function printHTML() {
    // Print out all three records in one single console.log using a variable msg.
    msg = "ID &nbsp; &nbsp; | &nbsp; Name &nbsp; | &nbsp; Mobile Number";
    msg += "<br />=========================<br />";
    for (let i=0; i < memArray.length; i++) {
        msg += memArray[i].id +  " &ensp; " + memArray[i].name +  " &ensp;&nbsp;&nbsp; " + memArray[i].mobileNum + "<br />"
    }


    
document.getElementById("target").innerHTML=msg;
}


// ===================== Start of Main =====================
createMembers();
prepareMessage();
console.log(msg);
alert(msg);

// ===================== EX5Q1 =====================
addMember();
prepareMessage();
console.log(msg);
alert(msg);

// ===================== EX5Q2 =====================
printHTML();
