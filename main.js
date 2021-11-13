import "./main.css";

import CodeSelect from "./js/codeSelect.js";

const test = document.querySelector("select");

new CodeSelect(test, (value) => {
	console.log(value);
});
