function evenHandler() {
    var newDiv = document.createElement("div");
    var randomColor = getRandomColor();
    newDiv.style.backgroundColor = randomColor;
    newDiv.style.width = "150px";
    newDiv.style.height = "150px";
    newDiv.style.display = 'inline-block';
    document.body.appendChild(newDiv);
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
