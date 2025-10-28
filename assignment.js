let name=prompt("Enter Your Name:");
let age=prompt("Enter Your Age:");
let marks=prompt("Enter Your Marks:");
let totalMarks=prompt("Enter Total Marks:");



let percentage = (marks()/totalMarks())*100;
let grade=""

if(percentage<=100 & percentage>=90){
    grade="Grade A"
    let message="Congratulations you got "+ grade + ". Keep Working Hard"
    
}

else if(percentage<90 & percentage>=80){
    grade="Grade B"
    message= "You got "+ grade + ". Work Hard. You have more Potential."
}

else if(percentage<80 & percentage>=60){
    grade="Grade C"
    message= "You got "+ grade + ". Need Work Hard. You have the Potential."
}

else if(percentage<60 & percentage>=30){
    grade="Grade D"
    message= "You got "+ grade + ". Needs Improvement. Have to Work Very Hard."
}


else if(percentage<30 & percentage>=0){
    grade="Failed"
    message= "You have "+ grade + ". Very poor performance. Needs to Work Very Hard."
}

else{
    grade="No Input"
    message="Please Provide Some Input"
}


let studentData=(`Name: ${name}<br>Age: ${age}<br>Grade: ${grade}<br>${message}`);
document.getElementById("Output").innerHTML = studentData 
