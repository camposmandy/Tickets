import { browser, element, by } from 'protractor';

describe('Tickets Component', function () {

  let expectedMsg = 'Tickets';

  beforeEach(function () {
    browser.get('');
  });

  it('should display: the correct url', function(){
    browser.getCurrentUrl().then(function (url) {
      console.log('url', url);
        expect(url).toEqual(browser.baseUrl + '/tickets');
      });
  });

  it('should display: ' + expectedMsg, function () {
    expect(element(by.css('h1')).getText()).toEqual(expectedMsg);
  });

  it('should display: ' + 'Todos os tickets cadastrados.', function () {
    expect(element(by.css('p')).getText()).toEqual('Todos os tickets cadastrados.');
  });

  it('should display: titles of table', function () {
    var _elementTable = element.all(by.css('.table th'));
    expect(_elementTable.get(0).getText()).toEqual('Id');
    expect(_elementTable.get(1).getText()).toEqual('Nome');
    expect(_elementTable.get(2).getText()).toEqual('Descrição');
    expect(_elementTable.get(3).getText()).toEqual('Status');
  });
  
  it('should display: elements on table', function () {
    var el = element.all(by.css('.table tbody tr'));
    el.count().then(function (count){
      expect(count === 3);
    });
  });
});