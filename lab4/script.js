// Завдання 1
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

document.getElementById('item3').addEventListener('click', function() {
    this.style.backgroundColor = getRandomColor();
    this.style.color = getRandomColor();
});

document.querySelector('h4').addEventListener('click', function() {
    this.style.backgroundColor = getRandomColor();
    this.style.color = getRandomColor();
});


// Завдання 2
const imgElement = document.querySelector("img");

document.getElementById("increaseSize").addEventListener("click", function() {
    imgElement.style.width = (imgElement.offsetWidth + 20) + "px";
});

document.getElementById("decreaseSize").addEventListener("click", function() {
    imgElement.style.width = (imgElement.offsetWidth - 20) + "px";
});

document.getElementById("removeImage").addEventListener("click", function() {
    imgElement.style.display = "none";
});

document.getElementById("addImage").addEventListener("click", function() {
    imgElement.style.display = "block";
});
