
function addRow(){
	let table = document.getElementById("students");
	let row = table.insertRow(table.rows.length);



	var name = document.getElementById("name").value;
	var surname = document.getElementById("surname").value;

	if(name == ""){
		document.getElementById("name").style.border = "3px solid red";
	}
	if(surname == ""){
		document.getElementById("surname").style.border = "3px solid red";
	}

	else{
		let cel1 = row.insertCell(0);
		let cel2  =row.insertCell(1);
		let cel3 = row.insertCell(2);


		cel1.innerHTML = name;
		cel2.innerHTML = surname;
		cel3.innerHTML = document.getElementById('faculty').options[document.getElementById('faculty').selectedIndex].text;

		document.getElementById("name").value = "";
		document.getElementById("surname").value = "";
	
}
}

