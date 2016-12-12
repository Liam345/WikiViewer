$(function() {
  
  
  document.querySelector("#searchBtn").addEventListener("click",function(){
    var searchInput = document.querySelector("#searchInput");
    console.log(searchInput.value);
    
    if(searchInput && searchInput.value){
      var ourRequest = new XMLHttpRequest();
    
      ourRequest.open('GET','https://en.wikipedia.org/w/api.php?action=query&format=json&indexpageids=1&prop=info&generator=search&inprop=url&origin=*&gsrsearch='+searchInput.value);
      ourRequest.onload= function(){
      var ourFile = JSON.parse(ourRequest.responseText);
      for(i=0;i<ourFile.query.pageids.length;i++){
        var pageId= ourFile.query.pageids[i];
        var ourUrl = ourFile.query.pages[pageId].fullurl;
        //console.log(searchInput);
        console.log(pageId);
        console.log(ourUrl);
        createHtml(ourFile);
        }
      };
  ourRequest.send();
    }
    else{
      console.log("User needs to give some input to search");
    }
});// closes anonymous function of event clicking the button

function createHtml(UrlData){
  var rawTemplate = document.querySelector("#urlTemplate");
  var compiledTemplate = Handlebars.compile(rawTemplate);
  var ourGeneratedHtml = compiledTemplate(urlData);
  
  var urlContainer = document.querySelector("#url-container");
  urlContainer.innerHtml = ourGeneratedHtml;
}
}) ;
