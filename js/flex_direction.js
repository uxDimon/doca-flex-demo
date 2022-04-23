import "../main.css";

import CodeSelect from "./codeSelect.js";
import Demo from "./demo.js";

const demoEl = document.querySelector("[data-demo-wrap]"),
	selectorFlexDirection = document.querySelector('[data-select="flex-direction"]');

demoEl.style.flexDirection = selectorFlexDirection.value;

new CodeSelect(selectorFlexDirection, (value) => {
	demoEl.style.flexDirection = value;
});

new Demo();
