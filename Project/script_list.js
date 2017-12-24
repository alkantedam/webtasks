const JSON_PATH = "http://demo0728678.mockable.io/alkantedam";

const SORT_PRICE = function(a, b) {
  return a.price - b.price;
};

const SORT_ALPHA_TITLE = function(a, b) {
  const titleA = a.title.toUpperCase();
  const titleB = b.title.toUpperCase();
  if (titleA < titleB) { return -1; }
  if (titleA > titleB) { return 1; }
  return 0;
};

class App{
	constructor(){
		this._onJsonReady = this._onJsonReady.bind(this);
		this._sortItems = this._sortItems.bind(this);

		const priceElement = document.querySelector("#desc");
		const priceButton = new SortButton(
			priceElement, this._sortItems, SORT_PRICE);
		const alphaElement = document.querySelector("#alpha");
		const alphaButton = new SortButton(
			alphaElement, this._sortItems, SORT_ALPHA_TITLE);
	}

	_sortItems(sortFunction){
		this.itemInfo.sort(sortFunction);
		this._renderItems();
	}
	_renderItems(){
		const itemContainer = document.querySelector("#list_elements");
		itemContainer.innerHTML = '';
		for(const info of this.itemInfo){
			const item = new Item(itemContainer, info.image, info.title, info.price, info.description);
		}
	}

	loadItems(){
		fetch(JSON_PATH).then(this._onResponse).then(this._onJsonReady);
	}

	_onJsonReady(json){
		this.itemInfo = json.items;
		const items = json.items;
		const itemContainer = document.querySelector("#list_elements");
		for(const info of this.itemInfo){
			const item = new Item(itemContainer, info.image, info.title, info.price, info.description);
		}
	}

	_onResponse(response){
		return response.json();
	}
}

class SortButton{
	constructor(containerElement, onClickCallback, sortFunction){
		this._onClick = this._onClick.bind(this);
		this.onClickCallback = onClickCallback; 

		this.sortFunction = sortFunction;
		containerElement.addEventListener('click', this._onClick);
	}

	_onClick(){
		this.onClickCallback(this.sortFunction);
	}
}

class Item{
	constructor(containerElement, imageUrl, title, price, description){
		
	
		let element = document.createElement("div");
		element.setAttribute("class", "list_element");

		let image = document.createElement('img');
		image.src = imageUrl;

		let text_element = document.createElement("div");
		text_element.setAttribute("class", "text_elements");

		let name = document.createElement("div");
		name.setAttribute("class", "title");
		name.innerHTML = title;

		let price_item = document.createElement("div");
		price_item.setAttribute("class", "price");
		price_item.innerHTML = price + "$";

		let item_desc = document.createElement("div");
		item_desc.setAttribute("class", "description");
		item_desc.innerHTML = description;


		element.append(image);
		text_element.append(name);
		text_element.append(price_item);
		text_element.append(item_desc);
		element.append(text_element);
		containerElement.append(element);
	}
}

const app = new App();
app.loadItems();