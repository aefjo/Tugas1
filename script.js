const inputN = document.querySelector("#inputN");
const btnSubmit = document.querySelector("#btnSubmit");
const listLi = document.querySelector("#listLi");

btnSubmit.addEventListener('click' , () => {
    if(inputN.value % 3 === 0 && inputN.value % 5 === 0) {
        listLi.innerHTML += `<li>FizzBuzz</li>`;
    } else if (inputN.value % 3 === 0) {
        listLi.innerHTML += `<li>Fizz</li>`;
    } else if (inputN.value % 5 === 0) {
        listLi.innerHTML += `<li>Buzz</li>`;
    } else {
        listLi.innerHTML += `<li>${inputN.value}</li>`;
    }

    inputN.value = '';
});
