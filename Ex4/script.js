let listElements = document.querySelectorAll('li');

listElements.forEach((a) => {
    a.addEventListener('click', (e) => {
        let color = "rgb(" + Math.floor(Math.random()*256) + "," + Math.floor(Math.random()*256) + "," + Math.floor(Math.random()*256) + ")";
        a.style.color = color;
    })
})