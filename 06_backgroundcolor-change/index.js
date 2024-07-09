//generate a random color
const randomColor = function () {
    const hex = '0123456789ABCDEF'
    let color = '#'
    for (i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
}
// console.log(randomColor())
let interTime;
const startChangingColor = function () {

    let changeBGColor = function () {
        document.body.style.backgroundColor = randomColor()
    }
    if (!interTime) {
        interTime = setInterval(changeBGColor, 1000)
    }
}
const stopChangingColor = function () {
    clearInterval(interTime)
    interTime = null;
}

document.querySelector('#start').addEventListener('click', startChangingColor);


document.querySelector('#stop').addEventListener('click', stopChangingColor);