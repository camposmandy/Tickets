"use strict";
var form_component_1 = require('./form.component');
describe('Form Component test', function () {
    var form = new form_component_1.FormComponent();
    var ticket = {
        id: 1,
        nome: 'A',
        descricao: 'Primeira letra do alfabeto.',
        status: 'TO DO',
        atualizando: false
    };
    var t = {
        id: 1,
        nome: 'A',
        descricao: 'Primeira letra do alfabeto.',
        status: 'TO DO',
        atualizando: true
    }, tickets = [
        ticket,
        {
            "id": 2,
            "nome": "B",
            "descricao": "Segunda letra do alfabeto.",
            "status": "TO DO",
            "atualizando": false
        }
    ];
    beforeEach(function () {
        spyOn(form, 'atualizar').and.returnValue(t);
        spyOn(form, 'adicionar').and.returnValue(tickets);
        spyOn(form, 'remover').and.returnValue(tickets[0]);
    });
    it('should test: method atualizar', function () {
        expect(form.atualizar).toBeDefined();
        var res = form.atualizar(ticket);
        ticket.atualizando = true;
        expect(form.atualizar).toHaveBeenCalled();
        expect(res).toEqual(tickets[0]);
    });
    it('should test: method adicionar', function () {
        expect(form.adicionar).toBeDefined();
        ticket.atualizando = false;
        var res = form.adicionar(ticket);
        expect(form.adicionar).toHaveBeenCalled();
        expect(res).toEqual(tickets);
    });
    it('should test: method remover', function () {
        expect(form.remover).toBeDefined();
        var res = form.remover(tickets[1]);
        expect(form.remover).toHaveBeenCalled();
        expect(res).toEqual(tickets[0]);
    });
});
//# sourceMappingURL=form.component.spec.js.map