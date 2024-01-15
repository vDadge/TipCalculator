// calculate tip variables 
function calculatetip()
{
    var billRup=document.getElementById("billrup").value;
    var service=document.getElementById("service").value;
    var people=document.getElementById("people").value;


    // to check the user enterd the input or not
    if(billRup===""||service==0)
    {
        alert("please enter the values");
        return;
    }
    
    //for people field

    if(people===""||people<=1)
    {
        people=1;
        document.getElementById("each").style.display="none";
    }
    else{
        document.getElementById("each").style.display="block";
    }
// calculation

var total=(billRup*service)/people;
// total = Math.round(total * 100) / 100;
total=total.toFixed(2);


document.getElementById("totaltip").style.display="block";
document.getElementById("tip").innerHTML=total;


}
document.getElementById("totaltip").style.display = "none";
document.getElementById("each").style.display = "none";


//click to call function
document.getElementById("cal").onclick = function() {
    calculatetip();
  
}