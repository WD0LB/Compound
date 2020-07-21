let start = document.getElementById('start');
let compound = document.getElementById('compound');
let time = document.getElementById('time');
let goBtn = document.getElementById('goBtn');
let clearBtn = document.getElementById('clearBtn');
let ul = document.getElementById('ul');
let array = [];
//Calculate array terms
function calculTermArray() {
	if (start.value !== "" && compound.value !== "") {
		array.push(Number(start.value));
		for (var i = 1; i < Number(time.value); i++) {
			let item = Number(start.value)*Math.pow(Number(compound.value),i);
			if(item === Infinity) {
				array.push(item);
				break;
			}
			array.push(item);
		}	
	}
}
//show array value
function updateArray() {
	ul.innerHTML = '';
	if (array.length !== 1 && array.length !== 0) {
		for (var i = 0; i < array.length; i++) {
			var li = document.createElement('li');
			li.appendChild(document.createTextNode('{'+(i+1)+'} : '+array[i].toFixed(2)));
			ul.appendChild(li);
		}
	}
	array = [];
}
//fun restart all
function clearAll() {
	start.value = '';
	compound.value = '';
	time.value = '';
	ul.innerHTML = '';
	array = [];
}
//Events
goBtn.addEventListener("click", () => {
	if (time.value <= 1200) {
	calculTermArray();
	updateArray()		
	} else if (time.value > 1200) {
		time.value = "";
		window.alert("Please enter a Number less than 1200 in time case\n This for machine safety ")
	}
})

clearBtn.addEventListener("click", () => {
	clearAll()
})