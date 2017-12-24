const JSON_PATH = "https://yayinternet.github.io/lecture17/oo-albums/albums.json";

const SORT_YEAR_ASC = function(a, b) {
  return a.year - b.year;
};
const SORT_YEAR_DESC = function(a, b) {
  return b.year - a.year;
};
const SORT_ALPHA_TITLE = function(a, b) {
  const titleA = a.name.toUpperCase();
  const titleB = b.name.toUpperCase();
  if (titleA < titleB) { return -1; }
  if (titleA > titleB) { return 1; }
  return 0;
};

class App{
	constructor(){
		this._onJsonReady = this._onJsonReady.bind(this);
		this._sortAlbums = this._sortAlbums.bind(this);

		const acsElement = document.querySelector("#asc");
		const acsButton = new SortButton(
			acsElement, this._sortAlbums, SORT_YEAR_ASC);
		const descElement = document.querySelector("#desc");
		const decsButton = new SortButton(
			descElement, this._sortAlbums, SORT_YEAR_DESC);
		const alphaElement = document.querySelector("#alpha");
		const alphaButton = new SortButton(
			alphaElement, this._sortAlbums, SORT_ALPHA_TITLE);
	}

	_sortAlbums(sortFunction){
		this.albumInfo.sort(sortFunction);
		this._renderAlbums();
	}
	_renderAlbums(){
		const albumContainer = document.querySelector("#album-container");
		albumContainer.innerHTML = '';
		for(const info of this.albumInfo){
			const album = new Album(albumContainer, info.url, info.name, info.year);
		}
	}

	loadAlbums(){
		fetch(JSON_PATH).then(this._onResponse).then(this._onJsonReady);
	}

	_onJsonReady(json){
		this.albumInfo = json.albums;
		const albums = json.albums;
		const albumContainer = document.querySelector("#album-container");
		for(const info of this.albumInfo){
			const album = new Album(albumContainer, info.url, info.name, info.year);
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

class Album{
	constructor(containerElement, imageUrl, title, year){
		
	
		let element = document.createElement("div");
		element.setAttribute("class", "element");

		let image = document.createElement('img');
		image.src = imageUrl;

		let name = document.createElement("div");
		name.setAttribute("class", "title");
		name.innerHTML = title;

		let price = document.createElement("div");
		price.setAttribute("class", "year");
		price.innerHTML = year;


		element.append(image);
		element.append(name);
		element.append(price);
		containerElement.append(element);
	}
}

const app = new App();
app.loadAlbums();

