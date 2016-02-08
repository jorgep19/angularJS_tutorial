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

    it('should filter the phone list as a user types into the search box', function() {
      // fetch the list shown on the ui by querying for its repeater definition
      var phoneList = element.all(by.repeater('phone in phones'));
      // look for the query model
      var query = element(by.model('query'));

      // verify that we see 3 phones at the begginning 
      expect(phoneList.count()).toBe(3);

      // should see 1 matches when query is 'nexus'
      query.sendKeys('nexus');
      expect(phoneList.count()).toBe(1);


      // should see 3 matches when the query is cleared
      query.clear();
      expect(phoneList.count()).toBe(3);

      // should see 2 matches when query is 'motorola'
      query.sendKeys('motorola');
      expect(phoneList.count()).toBe(2);
    });
  });

  it('should display the current filter value in the title bar', function() {
      // fetch the list shown on the ui by querying for its repeater definition
      var phoneList = element.all(by.repeater('phone in phones'));
      // look for the query model
      var query = element(by.model('query'));
      
      query.clear();
      expect(browser.getTitle()).toMatch(/Google Phone Gallery:\s*$/);

      query.sendKeys('nexus');
      expect(browser.getTitle()).toMatch(/Google Phone Gallery: nexus$/);
    });
});
