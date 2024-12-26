// function getInputFieldValueById() {
//   const addMoney = document.getElementById("input-add-money").value;
//   return addMoney;
// }
function getInputFieldValueById(id) {
  const inpuputValue = document.getElementById(id).value;
  const inputValueNumber = parseFloat(inpuputValue);
  // console.log(id, inputValueNumber);

  return inputValueNumber;
}
function getTextFieldValueById(id) {
  const textValue = document.getElementById(id).innerText;
  const textValueNum = parseFloat(textValue);
  return textValueNum;
}

function showSectionById(id) {
  // add hidden to all
  document.getElementById("add-money-form").classList.add("hidden");
  document.getElementById("cash-out-form").classList.add("hidden");
  document.getElementById("transaction-section").classList.add("hidden");
  // remove hidden to id
  document.getElementById(id).classList.remove("hidden");
}
