

var row = null;
function Submit(){
    var dataEntered = retrievedata();
    var readata = readingDataFromLS(dataEntered);
    if(dataEntered == false)
    return null;
    else{
    if(row == null)
    insert(readata);
    else
    update();
    }
    document.getElementById("form").reset();
}

function retrievedata(){
    var comment = document.getElementById("comment").value;


    return comment;
}


function readingDataFromLS(dataEntered){
    var cmt = localStorage.setItem("comet",dataEntered);

    // for getting the value stored in localStorage 

    var data = localStorage.getItem("comet",cmt);
    if(data.length == 0)
    return false;
    else
    return data;
}


function insert(readata){
    var row = table.insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = readata;
    cell2.innerHTML = `<button onclick = edit(this) >Edit</button> 
                       <button onclick = remove(this) >Delete</button>`;
}

function edit(data){
    row = data.parentElement.parentElement;
    document.getElementById("comment").value = row.cells[0].innerHTML;
}

function update(){
     row.cells[0].innerHTML = document.getElementById("comment").value ;
     row = null;

}
function remove(td){
    row = td.parentElement.parentElement;
    document.getElementById("table").deleteRow(row.rowIndex);
}