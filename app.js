var list = [];
let print = (list) => {
    const ul = document.getElementById('list');
    ul.innerHTML="";
    var cnt = 0;
    list.forEach(e => {
        const li = document.createElement("li");
        li.id = cnt;
        let cur =  `<input type="checkbox" name="item" onchange="handleChange(this,${cnt})" >
        <button class="common" type = "submit" onclick="delEle(${cnt})" title="Remove">
        <strong> - </strong></button> <button id="edit" type = "submit" onclick="makeEditable(${cnt})"
        title="Edit">
        <strong> \\ </strong></button> <input type="text" class="listItem" value='${e.text}' id="i${cnt}" readonly>`;
        li.innerHTML=cur;
        if(e.val == true){
            li.querySelector("input[type='checkbox']").checked=true;
            li.querySelector("input[type='text']").style.textDecoration='line-through';
        }
        console.log(e);
        cnt++;
        ul.appendChild(li);
    });    
}

function makeEditable(edit){
    const input = document.querySelector('#i'+edit);
    input.style.color = "orange";
    input.readOnly=false;
    console.log(list[edit]);
    input.focus();
    input.addEventListener('keyup',e=>{
        if(e.keyCode == 13){
            if(input.value.trim() === ''){
                input.style.color = "red";
                input.value = "sorry task is empty";
                input.readOnly=true;
            }else{
                list[edit].text = input.value;
                print(list);
            }
        }
    });
    
    input.color = "black";
    input.style.border="1px solid blue";
}



function handleChange(che,cnt){
    let li = document.querySelector('#i'+cnt);
    if(che.checked){
        li.style.textDecoration  = "line-through";
    }else{
        li.style.textDecoration  = "none";
    }
    list[cnt].val = che.checked;
    // li.style.textDecoration  = "line-through";
    console.log(che.style );
}

function addNewItem(){
    const value = document.getElementById('read').value;
    if(value.trim() == ""){
        document.getElementById('detail').style.color="red";
        document.getElementById('detail').innerHTML="sorry the task is empty!!!";
        return;
    }
    list.push({text:value,val:false});
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