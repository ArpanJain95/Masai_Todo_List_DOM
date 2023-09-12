const myForm = document.querySelector("form");
const inpTask = document.getElementById("task");
const selPriority = document.getElementById("priority");
const tbody = document.querySelector("tbody");

let allData = [];
myForm.addEventListener("submit", function(stopDefault){
    stopDefault.preventDefault();
    let data = {
        input : inpTask.value,
        priority : selPriority.value
    }
    allData.push(data);

    tbody.innerHTML = "";
    allData.map((ele)=>{
        const tr = document.createElement("tr");
        const td1 = document.createElement("td");
        const td2 = document.createElement("td");
        td1.innerText = ele.input;
        td2.innerText = ele.priority;
        tr.append(td1, td2);
        tbody.append(tr);
        if(ele.priority === "High"){
            td2.style.backgroundColor = "red"
        }
    })
})