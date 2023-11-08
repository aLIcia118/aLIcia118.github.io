console.log("theMessage");

const theButton = document.querySelector("button");
const theInput = document.querySelector("input");
let theDivider = document.querySelector("div")

let theUserWords;
let theItem;
let theTxt; 

let arr = [];

theButton.addEventListener('click', makeList)

function makeList() {
    console.log("click!");
    theUserWords = theInput.value;
    // console.log(theUserWords)
    arr.push(theUserWords);
    console.log(arr)
    theItem = document.createElement('li')
    const theSpan = document.createElement('span');
    theTxt = document.createTextNode(theUserWords);
    comb = document.createTextNode(arr);
    // document.body.appendChild(theItem);
    theDivider.appendChild(theItem);
    theItem.appendChild(theTxt);
    theInput.value = '';

    theInput.focus();
    
}

document.querySelector("h4").addEventListener('click', eraseThing)

function eraseThing(){
    console.log("Finished one task!");

    if (theDivider.lastChild){
        theDivider.removeChild(theDivider.lastChild)
        arr.pop()
        console.log(arr)
    }
   // document.querySelector("div").remove(theItem)
}


document.querySelector("p").addEventListener('click', eraseList)

function eraseList(){
    console.log('Yay! Finished!');

    while (theDivider.firstChild){
        theDivider.removeChild(theDivider.firstChild);
    }

    arr = []
}
