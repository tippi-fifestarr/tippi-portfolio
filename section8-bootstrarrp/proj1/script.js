const colorPicker = document.getElementById('color-picker');

colorPicker.value = "white"

colorPicker.addEventListener('input', () => {
	const colorSelected = colorPicker.value

	document.body.style.background = colorSelected

})