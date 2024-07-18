function calculateBMI() {
    const weight = document.getElementById("weight").value;
    const height = document.getElementById("height").value;
    const bmi = weight / (height * height);
    const resultElement = document.getElementById("result");

    if (bmi < 18.5) {
        resultElement.textContent = `Your BMI is ${bmi.toFixed(2)}. You are underweight.`;
    } else if (bmi < 25) {
        resultElement.textContent = `Your BMI is ${bmi.toFixed(2)}. You are normal weight.`;
    } else if (bmi < 30) {
        resultElement.textContent = `Your BMI is ${bmi.toFixed(2)}. You are overweight.`;
    } else {
        resultElement.textContent = `Your BMI is ${bmi.toFixed(2)}. You are obese.`;
    }
}