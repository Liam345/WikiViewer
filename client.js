$(function() {
  
  
  document.querySelector("#searchBtn").addEventListener("click",function(){
 var searchInput = document.querySelector("#searchInput");
 var searchInputValue = searchInput.value;
  document.querySelector("#results").innerHTML ="";
 //if (searchInput && searchInputValue)
 var ourRequest = new XMLHttpRequest();
 ourRequest.open('GET','https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&list=search&srsearch='+searchInputValue);
 ourRequest.onload=function(){
   var ourData = JSON.parse(ourRequest.responseText);
   

   //first do a for loop then delete it and use Handlebars
  // for(i=0;i<ourData.query.search.length;i++){
    // var title = ourData.query.search[i].title;
    // var snippet = ourData.query.search[i].snippet;
    // console.log(title);
    // document.querySelector("#results").innerHTML += '<h2><a href="http://en.wikipedia.org/wiki/'+title+'" target=_blank>'+title+'</a></h2>'+snippet;
  // }
   createHtml(ourData);
 }
ourRequest.send();
});// closes anonymous function of event clicking the button
// HandleBars tutorial


function createHtml(urlData){
  var rawTemplate = document.querySelector("#urlTemplate");
var compiledTemplate = Handlebars.compile(rawTemplate.innerHTML);
  var ourGeneratedHtml = compiledTemplate(urlData);
  
  var urlContainer = document.querySelector("#url-container");
  urlContainer.innerHTML = ourGeneratedHtml;
}
}) ;



