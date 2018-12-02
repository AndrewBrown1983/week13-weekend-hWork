import PubSub from '../helpers/pub_sub.js';

class InstrumentFamilies extends PubSub{
  constructor (data) {
    super();
    this.data = data;
  };

  bindEvents () {
    this.publish('InstrumentFamilies:data-ready', this.data);

    this.subscribe('SelectView:change', (evt) => {
      const selectedIndex = evt.detail;
      this.publishFamilyDetail(selectedIndex);
    });
  };

  publishFamilyDetail(selectedIndex) {
    const selectedFamily = this.data[selectedIndex];
    this.publish('InstrumentFamilies:selected-family-ready', selectedFamily)
  };
};
export default InstrumentFamilies;
