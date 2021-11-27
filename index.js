
//counter

let count=document.querySelector('.count')
let inc= document.querySelector('.btn-inc')
const increment= ()=>{
    count.textContent++
        };
inc.addEventListener('click',increment) 
const dec= document.querySelector('.btn-dec').addEventListener('click', ()=>{
    +count.textContent===0?
    (count.textContent=0):
    count.textContent--;   

        })




