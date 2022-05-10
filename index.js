// DOM - Document Object Model
// aka how you use JavaScrip to modidy website

let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el") // pass an arguments
let count = 0;

// FOR INCREMENT
function increment() {
    count += 1;

    countEl.textContent = count;
}

// TO SAVE AND PRINT THE NUMBERS
function save() {
    let savedNum = '"'+ count + '" ' ;
    saveEl.textContent += savedNum; // changed .innerText to .textContent because innerText only shows the human-readable elements

    // AFTER SAVING THE NUMBER WILL GO BACK TO ZERO
    count = 0;
    countEl.textContent = count;

}


