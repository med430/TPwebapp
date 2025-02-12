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