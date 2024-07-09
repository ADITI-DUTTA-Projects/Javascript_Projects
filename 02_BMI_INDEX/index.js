const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `Please give a valid height ${height}`;
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please give a valid weight ${weight}`;
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        //show the result
        results.innerHTML = `<span>${bmi}</span>`;
        if (bmi < 18.66) {
            results.innerHTML = `<span>${bmi} you're under weight </span>`
        } else if (18.66 < bmi < 24.99) {
            results.innerHTML = `<span>${bmi} you're right weight </span>`
        } else if (bmi > 24.99) {
            results.innerHTML = `<span>${bmi} you're over weight</span>`
        }
        // switch (bmi) {
        //     case (bmi < 18.66):
        //         results.textContent = `<span>${bmi} you're under weight </span>`

        //         break;
        //     case (bmi > 24.99):
        //         results.innerHTML = `<span>${bmi} you're under weight </span>`
        //         break;
        //     case (24.99 > bmi > 18.66):
        //         results.innerHTML = `<span>${bmi} you're under weight </span>`
        //         break;
        // }

    }
});