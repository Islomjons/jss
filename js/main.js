var elForm = document.querySelector(".form");
var elInput = document.querySelector(".form__input");

elForm.addEventListener("submit", function(event){
    event.preventDefault();
    
    var inputValue = elInput.value.trim();
    
    
    function wordsRender(word, number) {
        var newArray = word.split(" ");
        var longWord = " ";
        
        for (let i = 0; i < newArray.length; i++) {
            if(newArray[i].length > longWord.length){
                longWord = newArray[i];
            }
        }
        return longWord
    }
    
    var arrayOfWords = wordsRender(inputValue);
    console.log(arrayOfWords);
    alert(`Result: ${arrayOfWords}`)

})


var arrayNumbers = [1, 3, 5, 9];

