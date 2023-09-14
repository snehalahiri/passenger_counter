// 1. Grab the save-el paragrah and store it in a variable called saveEl
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0
console.log(saveEl)
function increment() {
    count = count + 1
    countEl.innerText = count
}

function save() 
{
    let countStr = count + " - "
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    // 3. Render the variable in the saveEl using innerText
    saveEl.textContent += countStr  //adding in pre exisisting count
    // NB: Make sure to not delete the existing content of the paragraph
    countEl.innerText = 0 //-> for incrementing from 0 every time
    count = 0
    console.log(count)
}

 
