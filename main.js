import "./main.css";

import CodeSelect from "./js/codeSelect.js";
import Demo from "./js/demo.js";

const test = document.querySelector("select");

new CodeSelect(test, (value) => {
	console.log(value);
});

new Demo();
