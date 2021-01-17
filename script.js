var keynote = "before"
var list = document.getElementById(keynote)
var input = document.getElementById("inputbox")
var textnode = `<a href="${keynote}.html">${keynote}.html</a>`

function keywhich(event) {
	 
	if (event.which === 48) {
		keynote = "before"
		return keynote
	} else if (event.which === 49) {
		keynote = "during"
		return keynote
	} else if (event.which === 50) {
		keynote = "after"
		return keynote
	}
}


function createListElement(keynote) {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(textnode));
	list.appendChild(li);
	console.log("created list", list)
}

function addListAfterKeypress(event) {
		keywhich(event);
		list = document.getElementById(keynote)
		console.log("changed list to ", list);
		createListElement(keynote);
		console.log("pressed key", event.key,  " works!", event.which);
		input.value = "";
}

input.addEventListener("keypress", addListAfterKeypress)
