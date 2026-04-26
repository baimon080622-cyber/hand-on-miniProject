//
// Variables
//
const list = document.getElementById("list")
const showGPAResult = document.getElementById("show-gpa-result");
const showHistory   = document.getElementById("show-history");
const buttonAdd     = document.getElementById("buttonAdd");
const buttonReset   = document.getElementById("buttonReset");
const buttonCal     = document.getElementById("buttonCal");

console.log(list)

console.log(buttonAdd)
//
// Methods
//

function handleReset() {
    console.log("handle Reset")

}
function handleCal(){
    console.log("handle Cal")
}

function handleAdd() {
    console.log("handle Add")
}
//
// Inits & Event Listeners
//

buttonAdd.addEventListener("click" , handleAdd)
buttonReset.addEventListener("click",handleReset)
buttonCal.addEventListener("click", handleCal)