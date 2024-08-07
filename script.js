const inputbox=document.getElementById("inputbox");
const list=document.getElementById("list");
const outgoing=document.getElementById("outgoing");
const btn=document.getElementById("btn");

btn.addEventListener('click', ()=>{
    if(inputbox.value===''){
        alert("hey, write something");
    }else{
    list.insertAdjacentHTML('beforeend', `<li>${inputbox.value}</li>`);
    inputbox.value="";
}})
