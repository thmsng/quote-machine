let apiCall = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';

let colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857",'#756797'];

$.getJSON(apiCall, getData);

$(document).ready(getQuote);

function getData(quotes) {
  let data = quotes;

  document.getElementById("new-quote").onclick = () => {
    var ran = Math.floor(Math.random() * data.quotes.length);
    var q = data.quotes[ran].quote;
    var a = data.quotes[ran].author;

    document.getElementById('text').innerHTML = q;
    document.getElementById('author').innerHTML = '- ' + a;
    getQuote();
  }

  var ran = Math.floor(Math.random() * data.quotes.length);
  var q = data.quotes[ran].quote;
  var a = data.quotes[ran].author;

  document.getElementById('text').innerHTML = q;
  document.getElementById('author').innerHTML = '- ' + a;
}


function getQuote() {
  var color = Math.floor(Math.random() * colors.length);

  document.getElementsByTagName("BODY")[0].style.color =colors[color];
  document.getElementsByTagName("BODY")[0].style.backgroundColor =colors[color];

  document.getElementsByClassName("button")[0].style.backgroundColor =colors[color];
  document.getElementsByClassName("button")[1].style.backgroundColor =colors[color];
  document.getElementsByClassName("button")[2].style.backgroundColor =colors[color];
}
