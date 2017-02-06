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
var TicketsComponent = (function () {
    function TicketsComponent() {
        this.tickets = [
            {
                id: 1,
                nome: 'A',
                descricao: 'Primeira letra do alfabeto.',
                status: 'TO DO',
                atualizando: false
            },
            {
                id: 2,
                nome: 'B',
                descricao: 'Segunda letra do alfabeto.',
                status: 'TO DO',
                atualizando: false
            },
            {
                id: 3,
                nome: 'C',
                descricao: 'Terceira letra do alfabeto.',
                status: 'TO DO',
                atualizando: false
            }
        ];
    }
    TicketsComponent.prototype.ngOnInit = function () {
    };
    TicketsComponent = __decorate([
        core_1.Component({
            selector: 'tickets-component',
            templateUrl: 'app/main/templates/tickets.template.html'
        }), 
        __metadata('design:paramtypes', [])
    ], TicketsComponent);
    return TicketsComponent;
}());
exports.TicketsComponent = TicketsComponent;
//# sourceMappingURL=tickets.component.js.map