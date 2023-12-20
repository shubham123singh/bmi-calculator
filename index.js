const height = document.getElementById("height");
const weight = document.getElementById("weight");
const button = document.getElementById("butn");
const Parent = document.getElementById("main");

button.addEventListener("click", function (e) {
  e.preventDefault();

  let heightInMeters = parseFloat(height.value )* 0.3048;
  let WeightValue = parseFloat(weight.value);

  //check if height and weight are both provide or not
  if (!height.value.trim() || !weight.value.trim()) {
    return alert("Please enter both height and weight.");
  }
  

  // check for input value
  if (isNaN(heightInMeters) || isNaN(WeightValue)) {
    return alert("enter a valid number");
  }

  let BmiValue = WeightValue / (heightInMeters * heightInMeters);

  let category = "";
  if (BmiValue < 18.5) {
    category = "Underweight";
  } else if (BmiValue >= 18.5 && BmiValue < 25) {
    category = "Normal weight";
  } else if (BmiValue >= 25 && BmiValue < 30) {
    category = "Overweight";
  } else {
    category = "Obese";
  }

  const categoryText = document.createElement("div");
  categoryText.innerText = "Category: " + category;
  

  const result = document.createElement("div");
  result.innerText = "Your BMI score:-" + BmiValue.toFixed(2);
  result.id = "output";

  const isExistingCategory = document.getElementById("categ");
  if(isExistingCategory){
    isExistingCategory.remove()
  };

  const isExistingResult = document.getElementById("output");
  if (isExistingResult) {
    isExistingResult.remove();
  }
  result.appendChild(categoryText);
  Parent.appendChild(result);
});
