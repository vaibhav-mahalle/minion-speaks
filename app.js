var txtInput = document.querySelector("#txt-input");
var btnTranslate = document.querySelector("#btn-translate");
var output = document.querySelector("#output");

var link = "https://api.funtranslations.com/translate/minion.json";

function urlGenerator(dummy_input)
{
    var URL = link + "?text="+ dummy_input ;
    return URL;
}

function clickHandler()
{
    var input = txtInput.value ;

    fetch(urlGenerator(input))
    .then(response => response.json)
    .then(json => {
        var translatedText = json.contents.translated;
        txtOutput.innerText = translatedText; // output
       })
}

btnTranslate.addEventListener("click",clickHandler)