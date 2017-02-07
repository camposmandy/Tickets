"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var ticket_1 = require('./ticket');
var FormComponent = (function () {
    function FormComponent() {
        this.ticket = new ticket_1.Ticket();
        this.teste = new ticket_1.Ticket();
        this.tickets = [];
        this.status = [
            {
                id: 1,
                descricao: 'TO DO'
            },
            {
                id: 2,
                descricao: 'DOING'
            },
            {
                id: 3,
                descricao: 'DONE'
            }
        ];
    }
    FormComponent.prototype.ngOnInit = function () {
    };
    FormComponent.prototype.adicionar = function (t) {
        if (!t.atualizando) {
            var ticket = new ticket_1.Ticket();
            ticket.id = new Date().getTime();
            ticket.nome = t.nome;
            ticket.descricao = t.descricao;
            ticket.status = t.status;
            ticket.atualizando = false;
            this.tickets.push(ticket);
            this.ticket = new ticket_1.Ticket();
        }
        else {
            t.atualizando = false;
            this.ticket = new ticket_1.Ticket();
        }
    };
    FormComponent.prototype.remover = function (t) {
        this.tickets.splice(this.tickets.indexOf(t), 1);
    };
    FormComponent.prototype.atualizar = function (t) {
        t.atualizando = true;
        this.ticket = t;
    };
    FormComponent = __decorate([
        core_1.Component({
            selector: 'form-component',
            templateUrl: 'app/main/templates/form.template.html'
        }), 
        __metadata('design:paramtypes', [])
    ], FormComponent);
    return FormComponent;
}());
exports.FormComponent = FormComponent;
//# sourceMappingURL=form.component.js.map