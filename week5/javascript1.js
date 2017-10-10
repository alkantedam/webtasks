function onCLick() {
	const first = document.querySelector("#first");
	const second = document.querySelector("#second");
	const third = document.querySelector("#third");
	const fourth = document.querySelector("#fourth");
	const fifth = document.querySelector("#fifth");
	const sixth = document.querySelector("#sixth");
	const seventh = document.querySelector("#seventh");
	const eighth = document.querySelector("#eighth");
	const nineth = document.querySelector("#nineth");

	const result = document.querySelector("#result");


	let det = parseInt(first.value)*(parseInt(fifth.value)*parseInt(nineth.value) - parseInt(sixth.value)*parseInt(eighth.value)) - 
				parseInt(second.value)*(parseInt(fourth.value)*parseInt(nineth.value) - parseInt(sixth.value)*parseInt(seventh.value)) +
				parseInt(third.value)*(parseInt(fourth.value)*parseInt(eighth.value) - parseInt(fifth.value)*parseInt(seventh.value));

	result.value = det;	
}

const button = document.querySelector('#addStudent');
button.addEventListener('click', onCLick);