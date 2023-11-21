
document.addEventListener('DOMContentLoaded',function(){
    const name = localStorage.getItem('name');
    const email = localStorage.getItem('email');
    const password = localStorage.getItem('password');
    const dob = localStorage.getItem('dob');
    const acceptedTerms = localStorage.getItem('acceptedTerms') === 'true';

    if(name && email && password && dob && acceptedTerms){
        const tableBody = document.querySelector('#data tbody');
        const newRow = document.createElement('tr');
        newRow.innerHTML=`
        <td>${name}</td>
        <td>${email}</td>
        <td>${password}</td>
        <td>${dob}</td>
        <td>${acceptedTerms?'Yes':'No'}</td>`;
        tableBody.appendChild(newRow)
        
    }
   
document.getElementById('registrationForm').addEventListener('submit',function(event){
    event.preventDefault();




const name = document.getElementById('name').value;
const email = document.getElementById('email').value;
const password = document.getElementById('password').value;
const dob=document.getElementById('dob').value;
const acceptedTerms = document.getElementById('acceptedTerms').checked;

const dobDate=new Date(dob);
const today = new Date();
const minDOB = new Date(today.getFullYear()-55,today.getMonth(),today.getDate());
const maxDOB = new Date(today.getFullYear()-18,today.getMonth(),today.getDate());
if (password.length<=2){
    alert('please enter password more than 8 chars');
    return;
}
if (dobDate<minDOB || dobDate>maxDOB){
    alert('please enter valid date of birth between 18 and 55 years');
    return;
}
localStorage.setItem('name',name);
localStorage.setItem('email',email);
localStorage.setItem('password',password);
localStorage.setItem('dob',dob);
localStorage.setItem('acceptedTerms',acceptedTerms);

const tableBody = document.querySelector('#data tbody');
const newRow = document.createElement('tr');
newRow.innerHTML=`
<td>${name}</td>
<td>${email}</td>
<td>${password}</td>
<td>${dob}</td>
<td>${acceptedTerms?'Yes':'No'}</td>`;
tableBody.appendChild(newRow);       

document.getElementById('registrationForm').reset();
});

});
