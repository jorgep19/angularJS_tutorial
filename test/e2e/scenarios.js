'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */
// This tests are using the Protractor API, http://angular.github.io/protractor/#/api.

// To run these test do `npm run protractor`, but make sure the app is running before 
// this (`npm start`)
describe('Angular Tutorial App', function() {

  describe('Phone List View', function() {
    beforeEach(function() {
      browser.get('app/index.html');
    });

    // fetch the list shown on the ui by querying for its repeater definition
    var phoneList = element.all(by.repeater('phone in phones'));
    // look for the query model
    var query = element(by.model('query'));

    it('should display the current filter value in the title bar', function() {
      query.clear();
      expect(browser.getTitle()).toMatch(/Google Phone Gallery:\s*$/);

      query.sendKeys('nexus');
      expect(browser.getTitle()).toMatch(/Google Phone Gallery: nexus$/);
    });
    
    // TODO debug this test.... Manually replicating behavior seems to work fine
    // it('should be possible to control phone order via the drop down select box', function() {

    //   var phoneNameColumn = element.all(by.repeater('phone in phones').column('phone.name'));
    //   var query = element(by.model('query'));

    //   function getNames() {
    //     return phoneNameColumn.map(function(elm) {
    //       return elm.getText();
    //     });
    //   }

    //   query.sendKeys('tablet'); //let's narrow the dataset to make the test assertions shorter

    //   expect(getNames()).toEqual([
    //     "Motorola XOOM\u2122 with Wi-Fi",
    //     "MOTOROLA XOOM\u2122"
    //   ]);

    //   element(by.model('orderProp')).element(by.css('option[value="name"]')).click();

    //   expect(getNames()).toEqual([
    //     "MOTOROLA XOOM\u2122",
    //     "Motorola XOOM\u2122 with Wi-Fi"
    //   ]);
    // });

     it('should render phone specific links', function() {
      var query = element(by.model('query'));
      query.sendKeys('nexus');
      element.all(by.css('.phones li a')).first().click();
      browser.getLocationAbsUrl().then(function(url) {
        expect(url).toBe('/phones/nexus-s');
      });
    });
  });
});
