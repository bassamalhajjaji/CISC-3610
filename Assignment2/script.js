function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const unit = document.querySelector('input[name="unit"]:checked').value;
    let bmi = 0;

    if (unit === "metric") {
        bmi = weight / (height * height);
    } else {
        bmi = (weight / (height * height)) * 703;
    }

    bmi = bmi.toFixed(2);

    let category = "";
    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi < 24.9) {
        category = "Normal weight";
    } else if (bmi < 29.9) {
        category = "Overweight";
    } else {
        category = "Obesity";
    }

    const result = `Your BMI: ${bmi} (${category})`;
    document.getElementById('result').innerText = result;
}