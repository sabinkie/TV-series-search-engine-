var currentValue;
var requestURL;


 function addInputValueToLink() {
	var currentInputValue = document.getElementById("inputValue_js").value;
	 currentValue = escape(currentInputValue);
	 console.log(currentValue);
	 requestURL = 'http://api.tvmaze.com/search/shows?q=:'
	 var add = requestURL + `${currentValue}`;
	 return add;
};



function get(){
var request = new XMLHttpRequest()
request.open('GET', addInputValueToLink() );
console.log(request);

request.onload = function() {

	
const app = document.getElementById('root');


const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(container);
	
  var data = JSON.parse(this.response)
  if (request.status >= 200 && request.status < 400) {
	  var i;
	  for (i = 0; i<data.length; i++) {
	  const card = document.createElement('div')
      card.setAttribute('class', 'card');


      const h1 = document.createElement('h1')
      h1.textContent = data[i].show.name;

      const p = document.createElement('p')
      var pt = data[i].show.summary.substring(0, 100).replace("<p>", '').replace("</p>", '').replace("<b>", '').replace("</b>", '')
      p.textContent = `${pt}...`;

	  const date = document.createElement('p')
      date.textContent = data[i].show.premiered;

	  const runtime = document.createElement('p')
	  runtime.textContent = `Runtime: ${data[i].show.runtime} minutes` ;
		  
	  const rating = document.createElement('p')
	  rating.textContent = `Score ${data[i].score}`;
		  
	  const img = document.createElement('image')
	  img.innerHTML = `<img src=\ ${data[i].show.image.medium}\>`
	  
      container.appendChild(card)
      card.appendChild(h1)
      card.appendChild(p)
	  card.appendChild(date)
	  card.appendChild(runtime)
	  card.appendChild(rating)
	  card.appendChild(img); 
    }
  } 

}



request.send()


}

//this function doesn't work whenewer used 

function clear() {
	var element = document.getElementsByClassName("container");
	var child = document.getElementsByClassName("card");
	return element.removeChild(child);
}
















