var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
// var deleteButtArr = document.querySelectorAll("deletebutton")
// console.log(deleteButtArr)
function inputLength() {
	return input.value.length;
}

function goodElement(element) {
	element.classList.toggle("goodElement")
}

function addDeleteButt(element){
	element.innerHTML += `<button onclick='deleteThis()' class='deletebutton'>deleteButt</button>`
	console.log("innerHTML is now added = ", element.innerHTML)
}

// deletes itself
function deleteThis()
{
	event.target.classList.toggle("gone")
}

// why not this way?
// function makeDeleteButtDelete(deleteButt){
// 	element.onclick
// 		element.classList.toggle("gone")
// }

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	// why doesn't this put it to the top of the list?
	li.addEventListener("click", toggleDoneAfterClick)
	// goodElement(li)
	addDeleteButt(li)
	ul.insertBefore(li, ul[0]);
// clear the input box?
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function toggleDoneAfterClick(event) {
	console.log(event.target.className)
	event.target.classList.toggle("done")
}

function checkLists(){
	var lists = document.querySelectorAll("li")
	for (list of lists){
		list.addEventListener("click", toggleDoneAfterClick)
		addDeleteButt(list)
		// list.querySelector("button").
		// lmao how this made it bad
		// goodElement(list)
		console.log("added event listener to ", list)
	}
}


// the main program
document.body.addEventListener("click", addListAfterClick);
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

checkLists();

