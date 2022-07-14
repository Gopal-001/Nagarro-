var list = [];
let print = (list) => {
    const ul = document.getElementById('list');
    ul.innerHTML="";
    var cnt = 0;
    list.forEach(e => {
        const li = document.createElement("li");
        li.id = cnt;
        let cur =  `<input type="checkbox" name="item" onchange="handleChange(this)" >
        <button class="common" type = "submit" onclick="delEle(${cnt})" title="Remove">
        <strong> - </strong></button> <button id="edit" type = "submit" onclick="makeEditable(${cnt})"
        title="Edit">
        <strong> \\ </strong></button> <input type="text" class="listItem" value='${e}' id="i${cnt}" readonly>`;
        li.innerHTML=cur;
        cnt++;
        ul.appendChild(li);
    });    
}

function makeEditable(edit){
    const input = document.querySelector('#i'+edit);
    input.color = "black";
    input.readOnly=false;
    input.focus();
    input.addEventListener('keyup',e=>{
        if(e.keyCode == 13){
            if(input.value.trim() === ''){
                input.style.color = "red";
                input.value = "sorry task is empty";
                input.readOnly=true;
            }else{
                list[edit] = input.value;
                print(list);
            }
        }
    });
}



function handleChange(che){
    let li = document.querySelector('#listItem');
    if(che.checked){
        li.style.textDecoration  = "line-through";
    }else{
        li.style.textDecoration  = "none";
    }
    
    // li.style.textDecoration  = "line-through";
    console.log(che.style );
}

function addNewItem(){
    const val = document.getElementById('read').value;
    if(val.trim() == ""){
        document.getElementById('detail').style.color="red";
        document.getElementById('detail').innerHTML="sorry the task is empty!!!";
        return;
    }
    list.push(val);
    document.getElementById('read').value='';
    print(list);
    console.log(list);
}

function delEle(toBeDeleted){
    console.log(toBeDeleted);
    list.splice(toBeDeleted,1);
    console.log(list);
    print(list);
}

function emptyError(){
    document.getElementById('detail').style.color="green";
    document.getElementById('detail').innerHTML="Enter your upcomming task!!!";
}


print(list);
