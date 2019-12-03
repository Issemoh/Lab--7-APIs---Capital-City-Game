function checkAnswer() {
    //  * read the text from the userAnswerElement 
    let userAnswerElement = document.querySelector("#user-answer");
  
    //  * Use fetch() to make a call to the World Bank API with the country code (from countriesAndCodes)
    let countryCode = countriesAndCodes[randomCountry]["country-code"];
    //var link = "https://api.worldbank.org/v2/country/br?format=json";
    var link = "https://api.worldbank.org/v2/country/" +  countriesAndCodes[randomCountry]["alpha-2"] + "?format=json";
    
    //const response = await fetch(link);
    //const myJson = await response.json();
    //console.log(JSON.stringify(myJson));
  window.fetch(link).then( (response) => response.json() ).then( result => {
      //do something with data here. 
       //  * If the API call was successful, extract the capital city from the World Bank API response.
      console.log (result)
      console.log(result[1])
   
       if (result[1]["capitalCity"].toUpperCase() == userAnswerElement.value.toUpperCase()){
        //user answer and result from fetch match so correct answer
        //resultTextElement.innerHTML = "Correct! The capital of Germany is Berlin";
        resultTextElement.innerHTML = "Correct! The capital of " + countriesAndCodes[randomCountry]["name"] + " is " + result[1]["capitalCity"];
      } else {
        //incorrect answer
        //resultTextElement.innerHTML = "Wrong - the capital of Germany is not G, it is Berlin";
        resultTextElement.innerHTML = "Wrong - the capital of " + countriesAndCodes[randomCountry]["name"] + " is not " + userAnswerElement.value + ", it is " + result[1]["capitalCity"];
      }
    //  * Compare it to the user's ansll //      You can decide how correct you require the user to be. At the minimum, the user's answer should be the same
    //      as the World Bank data - make the comparison case insensitive.
    //      If you want to be more flexible, include and use a string similarity library such as https://github.com/hiddentao/fast-levenshtein 
    //  * Finally, display an appropriate message in the resultTextElement to tell the user if they are right or wrong. 
    //      For example "Correct! The capital of Germany is Berlin" or "Wrong - the capital of Germany is not G, it is Berlin"      
   // } 
    })
    .catch( error => { 
      alert("There was an error");
      console.log (error)
    /* deal with error  */}) ;

    let resultTextElement = document.querySelector('#result');
    //  * Verify no errors were encountered in the API call. If an error occurs, display an alert message. 
   // if (no errors){
      //success path
     
    
  
  }
  
  
  var randomCountry;
  //window.addEventListener('DOMContentLoaded', (event) => {
    let randomCountryElement = document.querySelector('#random-country');
    let userAnswerElement = document.querySelector("#user-answer");
    let submitButton = document.querySelector("#submit-answer");
    let resultTextElement = document.querySelector('#result');
  
    console.log(countriesAndCodes)  // You don't need to log countriesAndCodes - just proving it is available 
  
    console.log(randomCountryElement);
  
    let countriesLength = countriesAndCodes.length;
  
    randomCountry = Math.floor(Math.random(0,1) * countriesLength);
    console.log(countriesAndCodes[randomCountry]);
  
    // display the country's name in the randomCountryElement
    randomCountryElement.innerHTML = countriesAndCodes[randomCountry].name;
    
    document.getElementById("submit-answer").addEventListener("click", checkAnswer);
  
    // TODO add a click event handler to the submitButton.  When the user clicks the button,
    //  * read the text from the userAnswerElement 
    //  * Use fetch() to make a call to the World Bank API with the country code (from countriesAndCodes)
    //  * Verify no errors were encountered in the API call. If an error occurs, display an alert message. 
    //  * If the API call was successful, extract the capital city from the World Bank API response.
    //  * Compare it to the user's answer. 
    //      You can decide how correct you require the user to be. At the minimum, the user's answer should be the same
    //      as the World Bank data - make the comparison case insensitive.
    //      If you want to be more flexible, include and use a string similarity library such as https://github.com/hiddentao/fast-levenshtein 
    //  * Finally, display an appropriate message in the resultTextElement to tell the user if they are right or wrong. 
    //      For example "Correct! The capital of Germany is Berlin" or "Wrong - the capital of Germany is not G, it is Berlin"  
  
    
    // TODO finally, connect the play again button. Clear the user's answer, select a new random country, 
    // display the country's name, handle the user's guess. If you didn't use functions in the code you've 
    // already written, you should refactor your code to use functions to avoid writing very similar code twice. 
    
    
  //});
  
  
  