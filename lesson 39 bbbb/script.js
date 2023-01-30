let muForm = document.querySelector('#myForm');
let elements = muForm.elements;
let result = document.querySelector('.result');
let btn = elements.btn;
let strt = elements.str;

btn.addEventListener('click', () => {
    evt.preventDefault();
    let mas = str.value.split('');
    result.append(mas);
    console.log(mas)
})
