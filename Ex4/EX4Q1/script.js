/** 
 * ---------------------------------------------------------------
 *  Title: IT8083_EX4Q1_P7460509
 *  Desc: Retrieving info from the Objects
 *  Author: Priya d/o Manoharan (Student ID: P7460509)
 *  Class: DICS1/CE/2022/1
 *  Date: 29-May-2022
 *  --------------------------------------------------------------- 
**/


// ---------- Declare Button ----------
function clickBtn() {

    class memberObj {
        constructor(id, name, mobileNum) {
            this.id = id;
            this.name = name;
            this.mobileNum = mobileNum;
        }
    }

    var memberArray, member1, member2, member3, alert_msg = "ID        |  Name     |  Mobile Number         ";
        br = "\n--------------------------------------------------------------------------\n";

            member1 = new memberObj("M001", "John ", "9123 4567");
            member2 = new memberObj("M002", "Mary", "9234 5678");
            member3 = new memberObj("M003", "Charlie", "9345 6789");
            memberArray = [member1, member2, member3];

            console.log(member1);
            console.log(member2);
            console.log(member3);
            console.log(memberArray);

            alert_msg = alert_msg + br;
            alert_msg += memberArray[0].id + "  |   " + memberArray[0].name + "     |  " + memberArray[0].mobileNum + "\n" +
            		 memberArray[1].id + "  |   " + memberArray[1].name + "     |  " + memberArray[1].mobileNum + "\n" +
            		 memberArray[2].id + "  |  " + memberArray[2].name + "   |  " + memberArray[2].mobileNum;

        window.alert(alert_msg);
        console.log(alert_msg);

}