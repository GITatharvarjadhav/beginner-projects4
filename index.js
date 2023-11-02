const btnE1 = document.getElementById("btn");
const bmiInput = document.getElementById("bmi-result");
const weightConditionE1 = document.getElementById("weight-condition");

function calculateBMI() {
    const HeightValue = document.getElementById("Height").value / 100; // Divide by 100 to get the value in meters
    const weightValue = document.getElementById("Weight").value;

    const bmiValue = weightValue / (HeightValue * HeightValue);

    bmiInput.value = bmiValue; // Corrected the variable name

    if (bmiValue < 18.5){
        weightConditionE1.innerText = "Under Weight";
    } else if (bmiValue >= 18.5 && bmiValue <= 24.9)
    {
        weightConditionE1.innerText = "Normal weight";
    } else if (bmiValue >= 25 && bmiValue <= 29.9){
        weightConditionE1.innerText = "Overweight"
    } else if (bmiValue<= 30){
        weightConditionE1,innerText = "Obesity";
    }
}

btnE1.addEventListener("click", calculateBMI);
