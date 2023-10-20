function price(currencyObj) {
  if (
    !currencyObj ||
    typeof currencyObj !== "object" ||
    typeof currencyObj.value !== "number" ||
    !currencyObj.currency
  ) {
    console.warn("Invalid currency object: ", currencyObj);
    return currencyObj;
  }
  const { value, currency } = currencyObj;

  const formattedValue = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  const currencySymbols = {
    USD: "$",
    EUR: "€",
    GBP: "£",
  };

  if (!Object.keys(currencySymbols).includes(currency)) {
    console.warn("Invalid currency: ", currency);
    return currencyObj;
  }
  const currentSymbol = currencySymbols[currency];

  return currentSymbol + " " + formattedValue;
}

export default price;
