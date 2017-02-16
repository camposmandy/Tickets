import { browser, element, by } from 'protractor';

describe('Form Component', function () {
  var _modelName: string, _modelDesc: string, _modelStatus: string;

  beforeEach(function () {
  });

  it('should display: the correct url', function(){
    browser.get('addTicket');
    browser.getCurrentUrl().then(function (url) {
      expect(url).toEqual(browser.baseUrl + 'addTicket');
    });
  });

  it('should display: Title', function () {
    expect(element(by.css('h1')).getText()).toEqual('Novo Ticket');
  });

  it('should display: Subtitle', function () {
    expect(element(by.css('p')).getText()).toEqual('Formulário para adição de um novo ticket.');
  });

  it('should display: form', function () {
    var _form = element.all(by.tagName('label'));
    expect(_form.get(0).getText()).toEqual('Nome:');
    expect(_form.get(1).getText()).toEqual('Descrição:');
    expect(_form.get(2).getText()).toEqual('Status:');
  });

  it('should display: input name', function () {
    var _name = browser.findElement(by.name('nome'));
    _name.sendKeys('A');

    var _model = browser.findElement(by.name('nome'));
    _model.getAttribute('value').then(function (value) {
      _modelName = value;
      expect(value).toEqual('A');
    });
  });
  it('should display: input description', function () {
    var _desc = browser.findElement(by.name('descrição'));
    _desc.sendKeys('Primeira letra do alfabeto');

    var _model = browser.findElement(by.name('descrição'));
    _model.getAttribute('value').then(function (value) {
      _modelDesc = value;
      expect(value).toEqual('Primeira letra do alfabeto');
    });
  });
  it('should display: input status', function () {
    var _sta = browser.findElement(by.name('status'));
    _sta.sendKeys('TO DO');

    var _model = browser.findElement(by.name('status'));
    _model.getAttribute('value').then(function (value) {
      _modelStatus = value;
      expect(value).toEqual('TO DO');
    });
  });

  it('should display: add ticket', function () {
    var _button = browser.findElement(by.name('salvar'));
    _button.click().then(function () {
        var el = element.all(by.css('.table tbody tr'));
          el.count().then(function (count){
          expect(count === 1).toBeTruthy();;
        });
    });
  });

  it('should display: edit ticket', function () {
    var _button = browser.findElement(by.name('editar'));
    _button.click().then(function () {
        expect(_modelStatus).toEqual('TO DO');
    });
  });

  it('should display: delete ticket', function () {
    var _button = browser.findElement(by.name('remover'));
    _button.click().then(function () {
        var el = element.all(by.css('.table tbody tr'));
          el.count().then(function (count){
          expect(count === 0).toBeTruthy();
        });
    });
  });

  it('should display: titles of table', function () {
    var _elementTable = element.all(by.css('.table th'));
    expect(_elementTable.get(0).getText()).toEqual('Id');
    expect(_elementTable.get(1).getText()).toEqual('Nome');
    expect(_elementTable.get(2).getText()).toEqual('Descrição');
    expect(_elementTable.get(3).getText()).toEqual('Status');
  });
});