const button = document.getElementById("button");
let outerDiv = document.getElementById("outer");
let input = document.getElementById("input");

let para1 = document.createElement("p");
para1.innerText = "No todo present";
outerDiv.appendChild(para1);
let clearButton;

button.addEventListener("click", function () {
    if (input.value === "") {
        alert("Please enter the text");
    } else {
        let div = document.createElement("div");
        div.className = "divs";
        let para = document.createElement("p");
        let updatebutton = document.createElement("button");
        updatebutton.innerText = "Update";
        let delbutton = document.createElement("button");
        delbutton.innerText = "Delete";
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        //para.textContent = input.value;

        let val = input.value;
        para1.innerText = "";



        para.appendChild(checkbox);
        para.append(val);
        para.appendChild(updatebutton);
        para.appendChild(delbutton);
        div.appendChild(para);

        delbutton.addEventListener("click", function () {
            outerDiv.removeChild(div);
            if (outerDiv.querySelectorAll(".divs").length === 0) {
                outerDiv.removeChild(clearButton);
                para1.innerText = "No todo present";
            }
        });

        checkbox.addEventListener("change", function () {
            if (checkbox.checked) {
                para.style.textDecoration = "line-through";
            } else {
                para.style.textDecoration = "none";
            }
        });

        outerDiv.insertBefore(div, outerDiv.lastChild);
        input.value = "";

        updatebutton.addEventListener("click", function () {
            button.innerText = "Update";
            input.value = para.childNodes[1].textContent.trim();
            button.addEventListener("click", function () {
                para.textContent = input.value;
                button.innerText = "Add";

            });


        });


        if (!outerDiv.querySelector("#clearbutton")) {
            clearButton = document.createElement("button");
            clearButton.innerHTML = "Clear All";
            clearButton.setAttribute("id", "clearbutton");
            outerDiv.appendChild(clearButton);

            clearButton.addEventListener("click", function () {
                const alldivs = document.querySelectorAll(".divs");
                alldivs.forEach(function (div) {
                    outerDiv.removeChild(div);
                });
                outerDiv.removeChild(clearButton);
                para1.innerText = "No todo present";
            });
        }
    }
});


