import 'bootstrap/dist/css/bootstrap.css';

let fonts = [
    "Arial",
    "Helvetica",
    "Times New Roman",
    "Courier New",
    "Verdana",
    "Georgia",
    "Comis Sans MS"
]

let sel_parent = document.querySelector('#select-police');

fonts.forEach((f) => {
    
    let new_option = document.createElement('option');
    new_option.value = f;
    new_option.textContent = f;
    sel_parent.appendChild(new_option);
})

let color_picker = document.querySelector("#color-picker");

let size_picker = document.querySelector("#size-picker");

let paragraph_writer = document.querySelector("#paragraph_writer");

color_picker.addEventListener("change", (e) => {
    paragraph_writer.style.color = color_picker.value;
});

size_picker.addEventListener("change", (e) => {
    paragraph_writer.style.fontSize = size_picker.value + "px";
});

sel_parent.addEventListener("change", (e) => {
    paragraph_writer.style.fontFamily = sel_parent.value;
})