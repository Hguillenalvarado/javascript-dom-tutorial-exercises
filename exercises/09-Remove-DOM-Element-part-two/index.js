let list = document.querySelector("#parentLI"),
	//eliminarli2 = document.getElementsByTagName("li")[1];

	//list.removeChild(eliminarli2);

	childs = list.childNodes;
list.removeChild(childs[1]);
