//JavaScript File

//Step Two - Bind the header and the section elements to the header and section vaiables

let header = document.querySelector('header');
let section = document.querySelector('section');

//Step Three - Store the URL of a JSON file in a variable 
let requestURL = "https://week4comp1006.azurewebsites.net/json-example/i-scream.json";

//Step Four - Create a new XHR object 

let request = new XMLHttpRequest();

//Step Five - Open a new request using the request method

request.open('GET', requestURL);

//Step Six - set JavaScript to accept JSON from the server

request.responseType = 'json';

//Step Seven - Send the request with the send() method

request.send();

//Step Eight - Add event handler, listening for the onload event of the JSON file/object

request.onload = function() {
	var iScreamInc = request.response;
	populateHeader(iScreamInc);
	topFlavours(iScreamInc);
}

//Step Nine - 

function populateHeader(jsonObj) {
	//add the company name
	var headerH1 = document.createElement('h1');
	headerH1.textContent = jsonObj['companyName'];
	header.appendChild(headerH1);
	//add the company info
	var headerPara = document.createElement('p');
	headerPara.textContent = 'Head Office ' + jsonObj['headOffice'] + ', Established ' + jsonObj['established'];
}

//Step 10 - Creating the topFlavours function

function topFlavours(jsonObj) {

	//bind the JSON obj topFlavours to a variable

	let topFlavours = jsonObj['topFlavours'];

	//loop through the top flavours object

	for(let i = 0; i < topFlavours.length; i++) {
		var article = document.createElement('article');
		var h2 = document.createElement('h2');
		var img = document.createElement('img');
		var p1 = document.createElement('p');
		var p2 = document.createElement('p');
		var list = document.createElement('ul');

		//set the text content

		img.setAttribute('src', 'http://aws/computerstudi.es/~gc900182471/json/images/' + topFlavours[i].image);
		img.setAttribute('alt', topFlavours[i].name);
		h2.textContent = topFlavours[i].name;
		//assign p1 - calories
		p1.textContent = topFlavours[i].calories;
		//p2 - type
		p2.textContent = topFlavours[i].type;
		//ul = list ingredients
		let ingredients = topFlavours[i].ingredients;
		//build a loop to loop through the ingredient list
		for(var j = 0; j < ingredients.length; j++){
			let listItem = document.createElement('li');
			listItem.textContent = ingredients[j];
			list.appendChild(listItem);
		}

		//Append each item to the section element
		article.appendChild(img);
		article.appendChild(h2);
		article.appendChild(p1);
		article.appendChild(p2);
		article.appendChild(list);
		section.appendChild(article);
	}
}