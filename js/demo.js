export default class Demo {
	constructor() {
		this.SIZE_CLASS = "_size";

		this.demoWrapEl = document.querySelector("[data-demo-wrap]");
		this.itemEl = this.demoWrapEl.querySelector("[data-demo-item]");
		this.endEl = this.demoWrapEl.querySelector("[data-demo-end]");

		this.itemListEl = [];

		this._created();
	}

	_created() {
		this.itemEl.remove();

		for (let index = 0; index < 3; index++) {
			this._itemConstructor(index);
		}
	}

	_itemConstructor(index) {
		let example = this.itemEl.cloneNode(true);
		const name = example.querySelector("[data-demo-item-name]"),
			btnRemove = example.querySelector('[data-demo-item-btn="remove"]'),
			btnSize = example.querySelector('[data-demo-item-btn="size"]'),
			btnAdd = example.querySelector('[data-demo-item-btn="add"]');

		name.innerText = name.innerText + " " + (index + 1);

		btnRemove.addEventListener("click", () => {
			if (this.itemListEl.length > 1) {
				this._removeItem();
			}
		});

		btnSize.addEventListener("click", () => {
			if (example.classList.contains(this.SIZE_CLASS)) {
				example.style.height = "";
				example.classList.remove(this.SIZE_CLASS);
			} else {
				const size = 50 * (Math.random() + 1.5);
				example.style.height = size + "px";
				example.classList.add(this.SIZE_CLASS);
			}
		});

		btnAdd.addEventListener("click", () => {
			this._addItem();
		});

		this.endEl.insertAdjacentElement("beforebegin", example);
		this.itemListEl.push(example);
	}

	_removeItem() {
		const lastKey = this.itemListEl.length - 1;

		this.itemListEl[lastKey].remove();
		this.itemListEl.splice(lastKey, 1);
	}

	_addItem() {
		this._itemConstructor(this.itemListEl.length);
	}
}
