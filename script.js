const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".bg__color");

if(btn){
    btn.addEventListener("click", ()=>{
        let hexColor = "#";
        for (let i=0; i<6; i++){
            hexColor += hex[getRandomNumber()];
        }

        color.innerHTML = hexColor;
        document.body.style.backgroundColor = hexColor;
    });
}

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}