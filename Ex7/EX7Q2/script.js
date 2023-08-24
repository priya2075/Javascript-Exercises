/** 
 * ---------------------------------------------------------------------------- 
 *  Title: IT8083_EX7Q2_P7460509
 *  Desc: Use of Javascript to control the behaviour of HTML elements
 *  Author: Priya d/o Manoharan (Student ID: P7460509)
 *  Class: DICS1/CE/2022/1
 *  Date: 24-July-2022
 *  ---------------------------------------------------------------------------
**/


//-------Variable Delaration------
// b) Declare a member array (name it as memArray) for storing the member objects in it.
var memArray = []; 
var message; 

//------functions-----------
// (a) Declare a member object (name it as MemberObj) Constructor or Template to hold the
// following information:
// (i) id
// (ii) name
// (iii) mobileNum
function MemberObj(id, name, dateOfBirth, address, mobileNum) {
    this.id = id;
    this.name = name;
    this.dateOfBirth = dateOfBirth;
    this.address = address;
    this.mobileNum = mobileNum;
}

function createMembers() {
    // c) Create three (3) member Objects (e.g. member1, member2, etc.) with fictitious member
    // properties such as:
    // id name mobileNum
    // m001 John 91234567
    // m002 Mary 92345678
    // m003 Charlie 93456789
    var member1 = new MemberObj("m000", "Chan Chin Swee", "12/12/1993", "500 Dover Ed", "9112 2334");
    var member2 = new MemberObj("m001", "Valerie Very Swee", "11/11/1988", "21 Clementi Ed", "9887 7665");

    // d) Store the newly created member Objects into the member array declared in (b).
    memArray = [member1, member2];
    console.log("myArray:", memArray);
}

function CustomCreateMember(uMemID, uMemName, uMemDob, uMemAddr, uMemMobileNum) {
    var member = new MemberObj(uMemID, uMemName, uMemDob, uMemAddr, uMemMobileNum);
    memArray.push(member);
    console.log("Print Array", memArray);
    window.alert("New member has been created! \nPlease click 'Display Members' to view the table.");
}

//------functions-----------
// (i) id - add value at the input box
// (ii) name - add value at the input box
// (iii) mobileNum - add value at the input box
// (iv) memAddr - add value at the input box
// (v) memMobileNum - add value at the input box
function addMember() {
    var uMemID = document.getElementById("memID").value;
    var uMemName = document.getElementById("memName").value;
    var uMemDob = document.getElementById("memDob").value;
    var uMemAddr = document.getElementById("memAddr").value;
    var uMemMobileNum = document.getElementById("memMobileNum").value;

    CustomCreateMember(uMemID, uMemName, uMemDob, uMemAddr, uMemMobileNum);

}

// This function is to display members' records onto the table
// ----------------------------------------------------------------------------------
function displayMemRecFunc() {
    window.alert("The displayMemRecFunc is being triggered!");
    // var message ="my member info table goes here!";
    var message = `
                    <table style='width:600px;'>
                        <tr>
                            <th>Member ID</th>
                            <th>Name</th>
                            <th>Date Of Birth</th>
                            <th>Address</th>
                            <th>Mobile No.</th>
                        </tr>
                  `;
        // -----------------
        for(x in memArray) {
            message += "<tr><td>" + memArray[x].id + "</td>"; // print the property value index by memArray[x]
            message +=     "<td>" + memArray[x].name + "</td>"; 
            message +=     "<td>" + memArray[x].dateOfBirth + "</td>"; 
            message +=     "<td>" + memArray[x].address + "</td>"; 
            message +=     "<td>" + memArray[x].mobileNum + "</td></tr>"; 
        }
        // -----------------
        message += "</table>";
        console.log(memArray)
        document.getElementById("target").innerHTML = message; // writes message to the target
       
        var z = document.getElementById("showEntryForm");
        if (z.style.display === "none") {
          z.style.display = "none";
          window.alert("But the form is hidden, click 'Show Entry Form'!");
          displayMemRecBtn.innerHTML = 'Form is hidden';
        } else {
          z.style.display = "none";
          displayMemRecBtn.innerHTML = 'Form is hidden';
        }
        return message;
}


// Ref: https://stackoverflow.com/questions/569357/clear-all-html-fields-using-javascript
// Clear form input fields
function clrMemInputs() {
    var elements = document.getElementsByTagName("input");
    window.alert("Form cleared!");
    for (var ii=0; ii < elements.length; ii++) {
        if (elements[ii].type == "text") {
            elements[ii].value = "";
        }
    }
}



function showEntryFormFunc() {
    var a = document.getElementById("showEntryForm");
    if (a.style.display === "none") {
        a.style.display = "block";
        showEntryFormBtn.innerHTML = 'Show Entry Form';
        displayMemRecBtn.innerHTML = 'Display Members';
    } else {
        a.style.display = "block";
        showEntryFormBtn.innerHTML = 'Show Entry Form';
      
    }
}


// ------- add event listener to button -----------
//---------------------- Button ------------------------------ Call Functions -----------
document.getElementById("clrFromBtn").addEventListener("click", clrMemInputs);  
document.getElementById("displayMemRecBtn").addEventListener("click", displayMemRecFunc);  



// ===================== Start of Main =====================

createMembers();


console.log(message);


// ===================== End of Main =====================
