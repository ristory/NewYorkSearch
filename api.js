var parameter1 = "";  
var parameter2 = "";  
var parameter3 = "";  
var parameter4 = "";  
var number = 0;
var startYear = "";
var endYear = "";
var url = "";
var search ="";

var numberRecord = $("#numberOfRecords").val()
numberRecord.trim();
var isCliked = false;
function searchTerm()
{
    search = $("#searchTerms").val();
    search.trim();  
    if(search != "")
    {
        parameter1 = "&q=" + search;
    }
}

function beginYear()
{
    startYear = $("#startYear").val();
    startYear.trim();  
    if(startYear != "")
    {
        parameter3 = "&begin_date=" + startYear;
    }
}       

function endYears()
{
    endYear = $("#endYear").val();
    endYear.trim();  
    if(endYear != "")
    {
        parameter4 = "&end_date=" + endYear;
    }
}

function api(){
    url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=419c067fec78437a846dbec67ddac83f" + parameter1  +parameter3 +parameter4;
    fetch(url)
    .then(function(r) {
        return r.json();
    })
    .then(function(data)
    {
        console.log(data.response.docs[0].web_url)
    })
    .catch(function(e)
    {
        console.error(e)
    })
}

$("#searchButton").click(function()
{
    searchTerm();
    beginYear();
    endYears();
    api();
    console.log(url)
})