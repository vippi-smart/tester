let theory = document.getElementById("actual");
let practicals = document.getElementById("practicall");


let theo = document.getElementById('theo');
let prac = document.getElementById('pract');

/*theo.addEventListener('click',()=>{
  theo.classList.add('btn-custom');
  prac.classList.remove('btn-custom');
  theory.style.display='block';
  practicals.style.display='none';
  
});
 
prac.addEventListener('click',()=>{
  prac.classList.toggle('btn-custom');
  theo.classList.remove('btn-custom')
  theory.style.display='none';
  practicals.style.display='block';
})*/



//adding extra table//
let attend = document.getElementById('attends');
let result = document.getElementById('result');
let assignments = document.getElementById('assignments');




/*result.addEventListener('click',()=>{

        assignments.textContent=attend.value;
})*/


//test purpose

let tog = document.getElementById('togglers');


function cringee(event){
if(event.target.checked){
  theory.style.display='none';
  practicals.style.display='block';
}
else{
  theory.style.display='block';
  practicals.style.display='none';

}
}

let canges= document.getElementById('canges');
const timings = () =>{
  setTimeout(()=>{
    canges.textContent="helper    ";
  },0); 
  setTimeout(()=>{
    canges.textContent="calculator";
  },4000);
  setTimeout(()=>{
    canges.textContent="mentor    ";
  },13000);

  
} 
  timings();
   setInterval(timings,13000);


tog.addEventListener('change',cringee);
//changee({target:tog})


function assignment_cals(assignment_1,assignment_2,assignment_3){
    let assignment=(assignment_1+assignment_2+assignment_3)/3;
	return assignment;
}

function theory_cia_cals(theory_cia_1,theory_cia_2)
{
	let cia=(theory_cia_1+theory_cia_2)/2;
	let theory_cia=(cia/75*100)*60/100;
	return theory_cia;
}

function practical_cia_cals(practical_cia_1,practical_cia_2){
	let practical_cia=(practical_cia_1+practical_cia_2)/2;
	return practical_cia;
}

function attendance_cals(hour,attend){
	let attendance_mark;
	let attendance_percentage=Math.round(attend/hour*100);
	if(attendance_percentage<=74)	
	{
		attendance_mark=0;
	}
	else if(attendance_percentage==75)
	{
		attendance_mark=5;
	}
	else if((attendance_percentage>=76)&&(attendance_percentage<=80))
	{
		attendance_mark=6;
	}
	else if((attendance_percentage>=81)&&(attendance_percentage<=85))
	{
		attendance_mark=7;
	}
	else if((attendance_percentage>=86)&&(attendance_percentage<=90))
	{
		attendance_mark=8;
	}
	else if((attendance_percentage>=91)&&(attendance_percentage<=95))
	{
		attendance_mark=9;
	}
	else if((attendance_percentage>=96)&&(attendance_percentage<=100))
	{
		attendance_mark=10;
	}
	else
	{
		attendance_mark=0;
	}
	
	return attendance_mark;
}

function theory_result(theory_seminar,theory_assignment,theory_cia,theory_attendance){
	let result1=(theory_seminar+theory_assignment+theory_cia+theory_attendance)*0.25;
	return result1;
}

function practical_result(practical_seminar,practical_assignment,practical_cia,practical_attendance){
	let result2=(practical_seminar+practical_assignment+practical_cia+practical_attendance)*0.4;
	return result2;
}

let theory_result_table=document.getElementById("theory_result_table");
theory_result_table.style.display="none";

let result_theory= document.getElementById('result_theory');
result_theory.addEventListener('click',()=>{
	//getting assingnment mark
	let theory_subject=document.getElementById("theory_subject").value;
	
	let theory_assignment_1=Number(document.getElementById("theory_assignment_1").value);
	let theory_assignment_2=Number(document.getElementById("theory_assignment_2").value);
	let theory_assignment_3=Number(document.getElementById("theory_assignment_3").value);
	
	let theory_assignment=assignment_cals(theory_assignment_1,theory_assignment_2,theory_assignment_3);
	
	let theory_cia_1=Number(document.getElementById("theory_cia_1").value);
	let theory_cia_2=Number(document.getElementById("theory_cia_2").value);
	
	let theory_cia=theory_cia_cals(theory_cia_1,theory_cia_2);
	
	let theory_hour=Number(document.getElementById("theory_hour").value);
	let theory_attend=Number(document.getElementById("theory_attend").value);
	
	let theory_attendance=attendance_cals(theory_hour,theory_attend);
	
	let theory_seminar=Number(document.getElementById("theory_seminar").value);
	
	let result_final=theory_result(theory_seminar,theory_assignment,theory_cia,theory_attendance);
	
	//let theory_table_result=document.getElementById("thoery_table_result");
	//theory_table_result.innerHTML="your internal mark is "+result_final;
	//console.log(result_final);
	theory_result_table.style.display="table";
	
	let theory_table_subject=document.getElementById("theory_table_subject");
	theory_table_subject.textContent=theory_subject;
	
	let theory_table_assignment=document.getElementById("theory_table_assignment");
	theory_table_assignment.textContent=theory_assignment.toFixed(1);
	
	let theory_table_cia=document.getElementById("theory_table_cia");
	theory_table_cia.textContent=theory_cia.toFixed(1);
	
	let theory_table_attendance=document.getElementById("theory_table_attendance");
	theory_table_attendance.textContent=theory_attendance.toFixed(1);
	
	let theory_table_seminar=document.getElementById("theory_table_seminar");
	theory_table_seminar.textContent=theory_seminar.toFixed(1);
	
	let theory_table_total=document.getElementById("theory_table_total");
	theory_table_total.textContent=result_final.toFixed(1);
})

let practical_result_table=document.getElementById("practical_result_table");
practical_result_table.style.display="none";


let result_practical=document.getElementById("result_practical");
result_practical.addEventListener("click",()=>{
	
	let practical_subject=document.getElementById("practical_subject").value;
	
	let practical_assignment_1=Number(document.getElementById("practical_assignment_1").value);
	let practical_assignment_2=Number(document.getElementById("practical_assignment_2").value);
	let practical_assignment_3=Number(document.getElementById("practical_assignment_3").value);
	
	let practical_assignment=assignment_cals(practical_assignment_1,practical_assignment_2,practical_assignment_3);
	
	let practical_cia_1=Number(document.getElementById("practical_cia_1").value);
	let practical_cia_2=Number(document.getElementById("practical_cia_2").value);
	
	let practical_cia=practical_cia_cals(practical_cia_1,practical_cia_2);
	
	let practical_hour=Number(document.getElementById("practical_hour").value);
	let practical_attend=Number(document.getElementById("practical_attend").value);
	
	let practical_attendance=attendance_cals(practical_hour,practical_attend);
	
	let practical_seminar=Number(document.getElementById("practical_seminar").value);
	
	let result_final1=practical_result(practical_seminar,practical_assignment,practical_cia,practical_attendance);
	
	/*console.log(result_final1);
	console.log(practical_assignment);
	console.log(practical_cia);
	console.log(practical_seminar);
	console.log(practical_attendance);*/
	
	practical_result_table.style.display="table";
	
	let practical_table_subject=document.getElementById("practical_table_subject");
	practical_table_subject.textContent=practical_subject;
	
	let practical_table_assignment=document.getElementById("practical_table_assignment");
	practical_table_assignment.textContent=practical_assignment.toFixed(1);
	
	let practical_table_cia=document.getElementById("practical_table_cia");
	practical_table_cia.textContent=practical_cia.toFixed(1);
	
	let practical_table_attendance=document.getElementById("practical_table_attendance");
	practical_table_attendance.textContent=practical_attendance.toFixed(1);
	
	let practical_table_seminar=document.getElementById("practical_table_seminar");
	practical_table_seminar.textContent=practical_seminar.toFixed(1);
	
	let practical_table_total=document.getElementById("practical_table_total");
	practical_table_total.textContent=result_final1.toFixed(1);
	//let practical_table_result=document.getElementById("practical_table_result");
	//practical_table_result.innerHTML="your internal mark is "+result_final1;
});

function attend_cals(hour,attend)
{
	let cals=Math.round(attend/hour*100);
	return cals;
}

let box10=document.getElementById("box10");
box10.style.display='none';
	
let attendance_calculate=document.getElementById("attendance_calculate");
attendance_calculate.addEventListener("click",()=>
{
	let subject1_hour=Number(document.getElementById("subject1_hour").value);
	let subject1_attend=Number(document.getElementById("subject1_attend").value);
	let subject1=attend_cals(subject1_hour,subject1_attend);
	
	let subject2_hour=Number(document.getElementById("subject2_hour").value);
	let subject2_attend=Number(document.getElementById("subject2_attend").value);
	let subject2=attend_cals(subject2_hour,subject2_attend);
	
	let subject3_hour=Number(document.getElementById("subject3_hour").value);
	let subject3_attend=Number(document.getElementById("subject3_attend").value);
	let subject3=attend_cals(subject3_hour,subject3_attend);
	
	let subject4_hour=Number(document.getElementById("subject4_hour").value);
	let subject4_attend=Number(document.getElementById("subject4_attend").value);
	let subject4=attend_cals(subject4_hour,subject4_attend);
	
	let subject5_hour=Number(document.getElementById("subject5_hour").value);
	let subject5_attend=Number(document.getElementById("subject5_attend").value);
	let subject5=attend_cals(subject5_hour,subject5_attend);
	
	let subject6_hour=Number(document.getElementById("subject6_hour").value);
	let subject6_attend=Number(document.getElementById("subject6_attend").value);
	let subject6=attend_cals(subject6_hour,subject6_attend);
	
	let subject7_hour=Number(document.getElementById("subject7_hour").value);
	let subject7_attend=Number(document.getElementById("subject7_attend").value);
	let subject7=attend_cals(subject7_hour,subject7_attend);
	
	let subject8_hour=Number(document.getElementById("subject8_hour").value);
	let subject8_attend=Number(document.getElementById("subject8_attend").value);
	let subject8=attend_cals(subject8_hour,subject8_attend);
	
	
	let arr=[subject1,subject2,subject3,subject4,subject5,subject6,subject7,subject8];
	
	let arr1=[];
	let count=0;
	for(let i=0;i<8;i++)
	{
		if(arr[i]>=0)
		{
			arr1.push(arr[i]);
			count+=1;
		}
	}
	
	let attend_total=0;
	arr1.forEach((attend)=>
	{
		attend_total=attend_total+attend;
	})



    let attend_per=document.getElementById("attend_per");
    let attend_tot=document.getElementById("attend_tot");
		let total_attendance=Math.round(attend_total/count);
		let mess1="";
		if(total_attendance<60)
		{
			mess1="you are not eligible for semester exam";
			attend_tot.style.color='red';
		}
		else
		{
			mess1="you are eligible for semester exam";
			attend_tot.style.color='green';
			
		}
	if(total_attendance>=0)
    {
        box10.style.display='block';
	    attend_per.textContent="your attendance percentage is "+total_attendance+"%";
        attend_tot.textContent=mess1;
    }
});