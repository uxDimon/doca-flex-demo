export default class CodeSelect {
	constructor(select, callbackChange = () => false) {
		this.selectEl = select;
		this.optionsWidth = {};
		this.callbackChange = callbackChange;

		this._created();
	}

	_created() {
		this._createdOptionsWidth();

		this.selectEl.addEventListener("change", (event) => {
			this._setWidth();
			this.callbackChange(event.currentTarget.value);
		});

		console.log(this.optionsWidth);
	}

	_createdOptionsWidth() {
		const REMOVE_CLASS = "codeSelect_remove";

		for (const options of this.selectEl.options) {
			let optionsEl = document.createElement("span");
			optionsEl.classList.add(REMOVE_CLASS);
			optionsEl.innerHTML = options.text;
			this.selectEl.insertAdjacentElement("afterend", optionsEl);
		}

		const removeElList = document.querySelectorAll("." + REMOVE_CLASS);

		window.onload = () => {
			for (const el of removeElList) {
				this.optionsWidth[el.innerText] = el.offsetWidth + 24;
				el.remove();
			}

			this._setWidth();
		};
	}

	_setWidth() {
		this.selectEl.style.width = this.optionsWidth[this.selectEl.selectedOptions[0].value] + "px";
	}
}
