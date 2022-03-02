const tasks =[];
const button = document.getElementById("onetwo");
// const item = document.getElementById("inputItem");
const ul = document.getElementsByClassName("new_item");

console.log(tasks)
button.addEventListener("click", blank)

document.getElementById("itemInput").addEventListener("keypress", function(e) {
  if(e.key === "Enter"){
    blank();
  }
});
// item.addEventListener("click", abc)

// function abc(){
//    console.log("clicked")
// }
function blank(){
    if(document.getElementById("itemInput").value==""){
        alert('Please add some task');
    }
    else{
        // text = input.value
        // const todo ={
        text = document.getElementById("itemInput").value,
        // id : RandomId()
        // }
        console.log(text)
        tasks.push(text)

    }
    // addText(tasks)
    document.getElementsByClassName("new_item")[0].appendChild(addText(tasks))
    console.log(tasks)
};


function addText(tasks){
    var listView=document.createElement('li')
    var listViewItem=document.createElement('li')
    listViewItem.innerHTML = `
    <input type="checkbox" style=" height:25px; width:25px" id="inputItem" onclick="yesno(listViewItem)">
    `
    // if(checkbox=checked){
    //     text = line
    // }

    listViewItem.appendChild(document.createTextNode(tasks[tasks.length-1]));
    listView.appendChild(listViewItem);
    document.getElementById("itemInput").value = ""
    return listView;

}

function yesno(listViewItem){

    if(listViewItem.checkbox = 'checked'){
        document.getElementById("itemInput").value.strike();
    }
}



// function RandomId(){
//     tasks = Math.floor(Math.random() * 100);
//     console.log(tasks)
// }
