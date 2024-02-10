const colors = ["red","green","skyblue","pink","orange","#A88320","#577CA1","#F19B9D"];

const btn = document.getElementById("btn");
const colorName = document.querySelector(".color");

btn.addEventListener("click", function(){
    const randomNumber = getRandomNumber();
    colorName.innerText = colors[randomNumber];
    document.body.style.backgroundColor = colors[randomNumber];
});

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
};