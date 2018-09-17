var parameter;

var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=419c067fec78437a846dbec67ddac83f" + parameter;



fetch(url)
.then(function(r) {
   return r.json();
})
.then(function(data)
{
   console.log(data.response)
})
.catch(function(e)
{
   console.error(e)
})