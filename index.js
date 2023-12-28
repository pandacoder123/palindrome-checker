let inputVal = document.getElementById("input");
let result = document.getElementById("result");

function check() {
	let result = document.getElementById("result");
	let input = document.getElementById("input");

	function reverseString(str) {
		return str.split("").reverse().join("");
	}
	let reverseInput = reverseString(input.value);

	if (input.value == "") {
		alert("Ensure you input a value in both fields!");
	}

	if (input.value == reverseInput) {
		console.log("Word is Palindrome");
		result.innerHTML = `This word is: a Pallendrone <br> <h3>${input.value} = ${reverseInput}</h3>`;
		result.style.color = "green";
		console.log(
			`This form has a username of ${input.value} and a reverse value of ${reverseInput}`
		);
		input.value = "";
	} else {
		console.log("Word is not Palindrome");
		result.style.color = "red";
		result.innerHTML = `This word is: not a Pallendrone <br> <h3>${input.value} ≠ ${reverseInput}</h3>`;
		console.log(
			`This form has a username of ${input.value} and a reverse value of ${reverseInput}`
		);

		input.value = "";
	}
}

document.addEventListener("DOMContentLoaded", function () {
	inputVal = document.getElementById("input");
	inputVal.addEventListener("keypress", function (e) {
		console.log("Key pressed:", e.key);
		if (e.key === "Enter") {
			check();
		}
	});
});
