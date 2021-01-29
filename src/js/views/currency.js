import { th } from "date-fns/locale";

class CurrencyUi {
  constructor() {
    this.currency = document.getElementById('currency');
    this.dictionary = {
      UDS: '$',
      EUR: '€'
    }
  }
  get currencyValue() {
    return this.currency.value;
  }
  getСurrencySymbol() {
    return this.dictionary[this.currencyValue];
  }
}
const currencyUi = new CurrencyUi();

export default currencyUi;