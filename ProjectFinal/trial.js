const JSON_PATH = "https://gist.githubusercontent.com/alkantedam/57d41291335c68309c1be389e9da8812/raw/f9cbe403cffd8a7109e90375792bb70095788c76/items.json";

const SORT_PRICE = function(a, b) {
  return a.year - b.year;
};

const SORT_TITLE = function(a, b) {
  const titleA = a.title.toUpperCase();
  const titleB = b.title.toUpperCase();
  if (titleA < titleB) { return -1; }
  if (titleA > titleB) { return 1; }
  return 0;
};

class App{
	constructor(){
		this._onJsonReady = this._onJsonReady.bind(this);
		this._sortAlbums = this._sortItems.bind(this);

		const priceElement = document.querySelector("#price-sort");
		const priceButton = new SortButton(
			priceElement, this._sortItems, SORT_PRICE);
		const titleElement = document.querySelector("#title-sort");
		const titleButton = new SortButton(
			titleElement, this._sortItems, SORT_TITLE);
	}

	_sortItems(sortFunction){
		this.itemInfo.sort(sortFunction);
		this._renderItems();
	}
	 _renderItems(){
	 	const itemContainer = document.querySelector("#elements");
	 	itemContainer.innerHTML = "";
	 	for(const info of this.itemInfo){
	 		const item = new Item(itemContainer, info.url);
	 	}
	 }

	 loadItems(){
	 	fetch(JSON_PATH).then(this._onResponse).then(this._onJsonReady);

	 }

	 _onJsonReady(json){
	 	this.itemInfo = json.items;
	 	const items = json.items;
	 	const itemContainer = document.querySelector("#elements");

	 	for(const info of this.itemInfo){
	 		const item = new Item(itemContainer, info.url);
	 	}
	 }
}






























