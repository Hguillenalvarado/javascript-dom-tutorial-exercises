let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here

	let elemento = document.createElement("li");
	elemento.innerHTML = "Forth element";

	let padre = document.querySelector("#myList");

	padre.appendChild(elemento);
});
