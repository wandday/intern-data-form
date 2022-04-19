var selectedItems = null
var items = []

let form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    var formInfo = readFormInfo();
    if (selectedItems == null)
        insertNewInfo(formInfo);
    else
        UpdateInfo(formInfo);
    clearForm();
    form.style.display = 'none';
   
})

// function onSubmission(){
//     var formInfo = readFormInfo();
//     if (selectedItems == null)
//         insertNewInfo(formInfo);
//     else
//         UpdateInfo(formInfo);
//     clearForm();
//     form.style.display = 'none';
// }

function readFormInfo() {
    var formInfo = {};
    formInfo['firstName'] = document.getElementById('firstName').value;
    formInfo['lastName'] = document.getElementById('lastName').value;
    formInfo['dept'] = document.getElementById('dept').value;
    formInfo['salary'] = document.getElementById('salary').value;
    return formInfo;

}

function insertNewInfo(formInfo) {
    items.push(formInfo)
    response = alert('The record has been added');
    response
    var table = document.getElementById('table-info').getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var currentItem =items[items.length-1]
    
    item1 = newRow.insertCell(0);
    item1.innerHTML = items.length;
    item2 = newRow.insertCell(1);
    item2.innerHTML = currentItem.firstName + ' ' + currentItem.lastName;
    item3 = newRow.insertCell(2);
    item3.innerHTML = currentItem.dept;
    item4 = newRow.insertCell(3);
    item4.innerHTML = currentItem.salary
    item5 = newRow.insertCell(4);
    item5.innerHTML = `<a onClick="onEdit(this)">Edit  </a>
                        <a onClick="onDelete(this)"> Delete </a>`;                
}

function clearForm(){
    document.getElementById('firstName').value ='';
    document.getElementById('lastName').value ='';
    document.getElementById('dept').value ='';
    document.getElementById('salary').value ='';
    selectedItems = null;
}

function onEdit(td){
    selectedItems = td.parentElement.parentElement;
    console.log("Index ", selectedItems.cells[0].innerHTML)
    indexToUpdate = selectedItems.cells[0].innerHTML
    document.getElementById('firstName').value = selectedItems.cells[1].innerHTML.split(' ')[0];
    document.getElementById('lastName').value = selectedItems.cells[1].innerHTML.split(' ')[1];
    document.getElementById('dept').value = selectedItems.cells[2].innerHTML;
    document.getElementById('salary').value = selectedItems.cells[3].innerHTML;
    formDataa.style.display = 'none' ? formDataa.style.display = 'block': formDataa.style.display = 'none';

}

function UpdateInfo(currentItem){
    selectedItems.cells[1].innerHTML = currentItem.firstName + ' ' + currentItem.lastName;
    selectedItems.cells[2].innerHTML = currentItem.dept;
    selectedItems.cells[3].innerHTML = currentItem.salary;
    alert('The record has been updated')
}

function onDelete(td){
    if(confirm('Delete this record?')){
        itemRow =  td.parentElement.parentElement;
        document.getElementById('table-info').deleteRow(itemRow.rowIndex);
        clearForm();
    }
}

const addButton = document.querySelector('.addButton');
const formData = document.querySelector('.form-data');

addButton.addEventListener('click', () => {
    formData.style.display = 'flex';
});

var hideForm = function(){
    var form = document.getElementById('form-data');
    // form.style.display = 'none';
};

const closeButton = document.querySelector('.close' );
const formDataa = document.querySelector(".form-data");

closeButton.addEventListener('click', () =>{
    formDataa.style.display = 'none';
})
