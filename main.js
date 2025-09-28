// Valyutalar va bayroqlar ro‘yxati
const currencyList = {
  USD: { name: "US Dollar", flag: "🇺🇸", rate: 1 },
  EUR: { name: "Euro", flag: "🇪🇺", rate: 0.95 },
  GBP: { name: "British Pound", flag: "🇬🇧", rate: 0.82 },
  JPY: { name: "Japanese Yen", flag: "🇯🇵", rate: 149.5 },
  UZS: { name: "Uzbek So'm", flag: "🇺🇿", rate: 12600 },
  RUB: { name: "Russian Ruble", flag: "🇷🇺", rate: 96 },
  CNY: { name: "Chinese Yuan", flag: "🇨🇳", rate: 7.3 },
  INR: { name: "Indian Rupee", flag: "🇮🇳", rate: 83 },
};

// Select elementlari
const fromCurrency = document.getElementById("from-currency");
const toCurrency = document.getElementById("to-currency");
const amountInput = document.getElementById("amount");
const resultDiv = document.getElementById("result");
const convertBtn = document.getElementById("convert-btn");

// Selectlarga valyutalarni yuklash
function loadCurrencies() {
  for (let code in currencyList) {
    let option1 = document.createElement("option");
    option1.value = code;
    option1.textContent = `${currencyList[code].flag} ${code}`;
    fromCurrency.appendChild(option1);

    let option2 = document.createElement("option");
    option2.value = code;
    option2.textContent = `${currencyList[code].flag} ${code}`;
    toCurrency.appendChild(option2);
  }

  fromCurrency.value = "USD"; // default
  toCurrency.value = "UZS"; // default
}

function convertCurrency() {
  let amount = parseFloat(amountInput.value);
  let from = fromCurrency.value;
  let to = toCurrency.value;

  if (isNaN(amount) || amount <= 0) {
    document.getElementById("converted").value = "❌ Noto‘g‘ri miqdor!";
    return;
  }

  let usdAmount = amount / currencyList[from].rate;
  let converted = usdAmount * currencyList[to].rate;

  // Natija input ichida chiqadi
  document.getElementById("converted").value = `${
    currencyList[to].flag
  } ${converted.toFixed(2)} ${to}`;
}

convertBtn.addEventListener("click", convertCurrency);

// Boshlanishida valyutalarni yuklaymiz
loadCurrencies();
