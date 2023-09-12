let text = document.getElementById("text");
let number = document.getElementById("number");
let button = document.getElementById("button");
let div = document.getElementById("expencediv");
let total = document.getElementById("totalvalue");
let count = 0;

button.addEventListener("click", function () {
    if(text.value==""||number.value=="")
    {
        window.alert("Please enter the correct input fileds")
    }
    else
    {
    let para1 = document.createElement("p");
    para1.innerHTML = text.value +" : " +number.value;
    div.appendChild(para1);

    count = parseFloat(count)+parseFloat(number.value);
    total.innerHTML =  count;        
    
    
    text.value="";
    number.value = "";
    }

})

