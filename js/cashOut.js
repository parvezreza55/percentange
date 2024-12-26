document
  .getElementById("cash-out-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const cashOut = getInputFieldValueById("input-cash-out");
    const pinNumber = getInputFieldValueById("input-cash-out-pin");
    if (isNaN(cashOut)) {
      alert("Failed to add money");
      return;
    }
    if (pinNumber === 1234) {
      const balance = getTextFieldValueById("account-balance");
      const newBalance = balance - cashOut;

      document.getElementById("account-balance").innerText = newBalance;
      // transaction section
      const div = document.createElement("div");
      div.classList.add("bg-yellow-300");
      div.classList.add("text-center");
      div.innerHTML = ` 
      <h1 class="text-3xl font-bold">Cash Out</h1>
      <p>${cashOut} withdraw Bal TK. ${newBalance}

      `;
      document.getElementById("transaction-container").appendChild(div);
    } else {
      alert("failed to cash out");
    }
  });
