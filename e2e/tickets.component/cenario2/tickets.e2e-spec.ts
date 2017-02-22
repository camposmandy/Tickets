import { browser, element, by } from 'protractor';

describe('Tickets Component Fail',  () =>  {
  let expectedMsg = 'Tickets';

  beforeEach( () =>  {
    ngApimock.selectScenario('getTickets','get0Tickets');
  });

  it('should display: the correct url',  () => {
    browser.get('tickets');
    browser.getCurrentUrl().then( (url) =>  {
      expect(url).toEqual(browser.baseUrl + 'tickets');
    });
  });

  it('should display: ' + expectedMsg, () =>  {
    expect(element(by.css('h1')).getText()).toEqual(expectedMsg);
  });

  it('should display: Todos os tickets cadastrados.',  () =>  {
    expect(element(by.css('p')).getText()).toEqual('Todos os tickets cadastrados.');
  });

  it('should display: titles of table',  () =>  {
    var _elementTable = element.all(by.css('.table th'));
    expect(_elementTable.get(0).getText()).toEqual('Id');
    expect(_elementTable.get(1).getText()).toEqual('Nome');
    expect(_elementTable.get(2).getText()).toEqual('Descrição');
    expect(_elementTable.get(3).getText()).toEqual('Status');
  });
  
  it('should display: none elements on table',  () =>  {
    var el = element.all(by.css('.table tbody tr'));
    el.count().then( (count) => {
      expect(count === 3).toBeFalsy();
      expect(count === 0).toBeTruthy();
    });
  });
});