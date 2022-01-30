async function fetchData(){
	var table = document.getElementById("table").getElementsByTagName('tbody')[0];
	table.innerHTML = "";
	var input = document.getElementById("inp-search").value;
	var url = "http://universities.hipolabs.com/search?country="+input;
	var heading = document.getElementById("name");
	heading.innerText = input.toUpperCase();
	try{
		var res = await fetch(url);	
	}catch(err){
		console.log(err);
	}
	var data = await res.json();
	for(var i=0;i<data.length;i++){
		var name = data[i]["name"];
		var newRow = table.insertRow();
		var idCell = newRow.insertCell();
		var newCell = newRow.insertCell();
		var text = document.createTextNode(name);
		var id = document.createTextNode(i+1);
		idCell.appendChild(id);
		newCell.appendChild(text);
	}
}
var btsearch = document.getElementById("search");
btsearch.addEventListener("click",fetchData);
