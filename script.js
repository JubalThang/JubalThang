const box = document.getElementById("header-box");

let hitCount = 0;
const myBtn = document.getElementById("myBtn");

myBtn.addEventListener('click', hit);


function hit() {
    hitCount++;
    console.log(`hit Count: ${hitCount}`);
}