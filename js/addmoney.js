document
  .getElementById("add-mone-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const addMoney = getInputFieldValueById("input-add-money");
    const pinNumber = getInputFieldValueById("input-pin");
    // console.log("add money id", addMoney, pinNumber);
    if (isNaN(addMoney)) {
      alert("Failed to add money");
      return;
    }
    if (addMoney > pinNumber) {
      const balance = getTextFieldValueById("account-balance");

      const newBalance = ((addMoney - pinNumber) * 100) / addMoney;
      document.getElementById("account-balance").innerText = newBalance;
      document.getElementById("input-add-money").value = "";
      document.getElementById("input-pin").value = "";

      // transaction section
      const p = document.createElement("p");
      p.innerText = `Added : ${addMoney} TK. ${newBalance}`;
      document.getElementById("transaction-container").appendChild(p);
    } else {
      alert("Failed to log in");
    }
  });
