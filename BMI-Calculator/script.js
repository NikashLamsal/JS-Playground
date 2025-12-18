const getInput = document.querySelector('form')
const input_weight = document.querySelector('#weight')
const input_height = document.querySelector('#height')
const result = document.querySelector('#result')

function submitData() {

    getInput.addEventListener('submit', function (event) {
        event.preventDefault();
        input_height.style.border = '';
        input_weight.style.border = '';
        result.innerHTML = ""
        const height = parseFloat(document.querySelector('#height').value)

        const weight = parseFloat(document.querySelector('#weight').value)


        if (isNaN(height)) {
            input_height.style.border = '1.5px solid red';

        }
        else if (isNaN(weight)) {
            input_weight.style.border = '1.5px solid red'
        }
        else {
            const bmi = (weight / (height * height)).toFixed(2)

            if (bmi < 18.5) {
                result.style.color = "red";
                result.innerHTML = `<span>BMI Value : ${bmi}</span><p><strong>Underweight</strong></p>`;
            }

            if (bmi >= 18.5 && bmi < 24.9) {
                result.style.color = "green";
                result.innerHTML = `<span>BMI Value : ${bmi}</span><p><strong>Normal</strong></p>`;
            }

            if (bmi >= 24.9 && bmi < 29.9) {
                result.style.color = "red";
                result.innerHTML = `<span>BMI Value : ${bmi}</span><p><strong>Overweight</strong></p>`;
            }

            if (bmi >= 29.9) {
                result.style.color = "red";
                result.innerHTML = `<span>BMI Value : ${bmi}</span><p><strong>Obese</strong></p>`;
            }
        }

    }
    )
}