'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('my app', function() {

  beforeEach(function() {
    browser.get('app/index.html');
  });

  it('should create "phones" model with 3 phones', function() {
    var scope = {},
        ctrl = new PhoneListCtrl(scope);

    expect(scope.phones.length).toBe(3);
  });

});
