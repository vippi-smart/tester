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




result.addEventListener('click',()=>{

        
        assignments.textContent=attend.value;
})


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
changee({target:tog})





  


