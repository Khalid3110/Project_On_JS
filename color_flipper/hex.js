const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

const btn = document.getElementById("btn");
const colorName = document.querySelector(".color");

btn.addEventListener("click", function(){
    let hexNumber = "#";
    for(let i=0;i<6;i++){
        hexNumber += hex[getRandomNumber()];
    }

    document.body.style.backgroundColor = hexNumber;
    colorName.innerText = hexNumber;
});

function getRandomNumber(){
    return Math.floor(Math.random() * hex.length);
}