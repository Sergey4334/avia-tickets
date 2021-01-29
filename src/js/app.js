import '../css/style.css';
import './plugins';
import locations from './store/locations';
import formUi from './views/form';
import currencyUi from './views/currency';
import ticketsUi from './views/tickets';

document.addEventListener('DOMContentLoaded', () => { 
  initApp();
  const form = formUi.form;
  //* Events
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    onFormSubmit();
  });

  //* Handlers - Обработчики
  async function initApp() {
    await locations.init();
    formUi.setAutocomplateDate(locations.shortCitiesList);
  }
  async function onFormSubmit() {
    //*собрать данные из инпутов
    const origin = locations.getCityByKey(formUi.originValue);
    const destination =locations.getCityByKey(formUi.destinationValue) ;
    const depart_date = formUi.departDateValue;
    const return_date = formUi.returnDateValue;

    const currency = currencyUi.currencyValue;
    //* CODE, CODE, 2020-09, 2020-10 
    
    await locations.fetchTickets({
      origin,
      destination,
      depart_date,
      return_date,
      currency,
    });
    //console.log(locations);
    ticketsUi.renderTickets(locations.lastSearch);
  }
});
