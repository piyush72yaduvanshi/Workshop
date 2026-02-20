const buttons=document.querySelectorAll("button");
const display=document.querySelector("#display");
const result = document.querySelector("#history");

let values="";
Array.from(buttons).forEach(button=>{
    button.addEventListener("click",(e)=>{
        let value=e.target.innerText
        if(value=="="){
            values=eval(values);
            display.value=values
        }
        else if(value=="C"){
            values=""
            result.value=""
            display.value=values
        }
        else if(value=="X"){
            values=values.substring(0,values.length-1);
            display.value=values
            result.value=values
        }
        else{
            values+=value;
            display.value=values
            result.value=values
        }
    })
})

