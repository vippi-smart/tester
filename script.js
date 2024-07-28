let theory = document.getElementById("actual");
let practicals = document.getElementById("practicall");


let theo = document.getElementById('theo');
let prac = document.getElementById('pract');

theo.addEventListener('click',()=>{
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
})



//adding extra table//
let attend = document.getElementById('attends');
let result = document.getElementById('result');
let assignments = document.getElementById('assignments');


function assignment_cals(){
            
}

result.addEventListener('click',()=>{

        
        assignments.textContent=attend.value;
})
