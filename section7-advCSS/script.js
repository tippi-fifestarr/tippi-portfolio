var speeds = [1, 2, 3];
var zooms = [1.1, 1.2, 1.5, 2, 0];
let homelink = `<a href="../index.html">go back one index</a>`

var speedCount = 1
var zoomCount = 0



function handleSpeedButtClick(){
	var x = document.getElementsbyClassName("container")
	l = x.length
	for (i of l){
		x[i].style.display = "none";
	}

	// console.log("speed up" + speeds[speedCount])
	// var imageCollection = document.images
	// console.log("imgcol:" + imageCollection.length)
	// for (img of imageCollection){
	// 	console.log(img)
	// }
	// style.transition = 'all ${speeds[speedCount]}s'
	// speedCount++
	// if (speedCount>2)
	// {
	// 	speedCount=0
	// }
}

// function handleZoomButtClick(){

// }

// function handleGoAwayButtClick(){

// }