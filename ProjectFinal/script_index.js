 
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
		const itemContainer = document.querySelector("#container-elements");
		itemContainer.innerHTML = '';
		for(const info of this.itemInfo){
			const item = new Item(itemContainer, info.image, info.title, info.price);
		}
	}

	loadItems(){
		fetch(JSON_PATH).then(this._onResponse).then(this._onJsonReady);
	}

	_onJsonReady(json){
		this.itemInfo = json.items;
		const items = json.items;
		const itemContainer = document.querySelector("#container-elements");
		for(const info of this.itemInfo){
			const item = new Item(itemContainer, info.image, info.title, info.price);
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
	constructor(containerElement, imageUrl, title, price){
		
	
		let element = document.createElement("div");
		element.setAttribute("class", "element");

		let image = document.createElement('img');
		image.src = 'images/' + imageUrl;

		let name = document.createElement("div");
		name.setAttribute("class", "title");
		name.innerHTML = title;

		let price_item = document.createElement("div");
		price_item.setAttribute("class", "price");
		price_item.innerHTML = price + "$";


		element.append(image);
		element.append(name);
		element.append(price_item);
		containerElement.append(element);
	}
}

const app = new App();
app.loadItems();




var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n){
	showSlides(slideIndex += n);
}

function currentSlide(n){
	showSlides(slideIndex = n);
}

function showSlides(n){
	var i;
	var slides = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("dot");

	if(n > slides.length){
		slideIndex = 1;
	}
	if (n < 1){
		slideIndex = slides.length;
	}
	for(i = 0; i < slides.length; i++){
		slides[i].style.display = "none";

	}

	for(i = 0; i < dots.length; i++){
		dots[i].className = dots[i].className.replace("active", "");
	}

	slides[slideIndex-1].style.display = "block";
	dots[slideIndex-1].className += " active";
}















