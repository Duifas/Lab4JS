//JavaScript File

//Step Two - Bind the header and the section elements to the header and section vaiables

let header = document.querySelector('header');
let section = document.querySelector('section');

//Step Three - Store the URL of a JSON file in a variable 
let requestURL = "https://raw.githubusercontent.com/Duifas/Lab4JS/master/json-example/json/i-scream.json";

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
	console.log(iScreamInc);
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
	header.appendChild(headerPara);
}

//Step 10 - Creating the topFlavours function

function topFlavours(jsonObj) {

	//bind the JSON obj topFlavours to a variable

	let products = jsonObj['products'];

	//loop through the top flavours object

	for(let i = 0; i < products.length; i++) {
		var article = document.createElement('article');
		var h2 = document.createElement('h2');
		var p1 = document.createElement('p');
		var p2 = document.createElement('p');
		var img = document.createElement('img');


		//set the text content
		img.setAttribute('src', 'https://github.com/Duifas/Lab4JS/blob/master/json-example/images/' + products[i].image);
		img.setAttribute('alt', products[i].name);


		h2.textContent = topFlavours[i].name;
		h2.textContent = products[i].name;
		//assign p1 - calories
		p1.textContent = products[i].price;
		//p2 - type
		p2.textContent = products[i].description;

		//Append each item to the section element
		article.appendChild(h2);
		article.appendChild(img);
		article.appendChild(p1);
		article.appendChild(p2);
		section.appendChild(article);
	}
}