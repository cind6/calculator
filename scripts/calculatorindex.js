"user strict"


    // find the HTML elements
    const number1Field = document.getElementById("number1Field");
    const number2Field = document.getElementById("number2Field");
    const addBtn = document.getElementById("addBtn");
    const subtractBtn = document.getElementById("subtractBtn");
    const multiplyBtn = document.getElementById("multiplyBtn");
    const divideBtn = document.getElementById("divideBtn");
    const answer = document.getElementById("answerField");


   window.onload = init;

   function init(){
       addBtn.onclick = onAddBtnClicked;
       subtractBtn.onclick = onSubtractBtnClicked; 
       multiplyBtn.onclick = onMultiplyBtnClicked;
       divideBtn.onclick = onDivideBtnClicked;
   }

   function onAddBtnClicked(){
       console.log("clicked");
        // extract the values from the number 1 and number 2 fields
  const number1 = Number(number1Field.value);
  const number2 = Number(number2Field.value);

  // add the numbers together and store the result
  const sum = number1 + number2;

  // display the result in the answer field
  answer.value = sum;
}
function onSubtractBtnClicked(){
    console.log("clicked");

const number1 = Number(number1Field.value);
const number2 = Number(number2Field.value);
// subtract number2 from number1 and store the result
const difference = number1 - number2;
// display the result in the answer field
answer.value = difference;

}
function onMultiplyBtnClicked() {
    // extract the values from the number 1 and number 2 fields
    const number1 = Number(number1Field.value);
    const number2 = Number(number2Field.value);
  
    // multiply number1 and number2 and store the result
    const result = number1 * number2;
  
    // display the result in the answer field
    answer.value = result;
  }
  function onDivideBtnClicked() {
    // extract the values from the number 1 and number 2 fields
    const number1 = Number(number1Field.value);
    const number2 = Number(number2Field.value);
  
    // divide number1 by number2 and store the result
    const result = number1 / number2;
  
    // display the result in the answer field
    answer.value = result;
  }
   