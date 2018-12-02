import PubSub from '../helpers/pub_sub.js';

class SelectView extends PubSub{

  constructor (element) {
    super();
    this.element = element;
  };

  bindEvents () {
    this.subscribe('InstrumentFamilies:data-ready', (evt) => {
      const allInstrumentFamilies = evt.detail;
      this.populate(allInstrumentFamilies);
    });

    this.element.addEventListener('change', (evt) => {
      const selectedIndex = evt.target.value;
      this.publish('SelectView:change', selectedIndex);
    });
  };

  populate (instrumentFamilyData) {
    instrumentFamilyData.forEach((familiy, index) => {
      const option = document.createElement('option');
      option.textContent = familiy.name;
      option.value = index;
      this.element.appendChild(option);
    });
  };
};
export default SelectView;