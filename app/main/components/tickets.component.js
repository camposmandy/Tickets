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
var tickets_service_1 = require('../services/tickets.service');
var TicketsComponent = (function () {
    function TicketsComponent(ticketsService) {
        this.ticketsService = ticketsService;
    }
    TicketsComponent.prototype.ngOnInit = function () {
        this.loadTickets();
    };
    TicketsComponent.prototype.loadTickets = function () {
        var _this = this;
        console.log('edjan');
        this.ticketsService.getTickets().subscribe(function (tickets) { return _this.tickets = tickets; }, function (err) { console.log('não foi dessa vez amanda', err); });
    };
    TicketsComponent = __decorate([
        core_1.Component({
            moduleId: 'module.id',
            selector: 'tickets-component',
            template: '<div class="jumbotron"> <h1>Tickets</h1> <p>Todos os tickets cadastrados.</p> <div class="table-responsive"> <table class="table table-striped"> <thead> <tr><th>Id</th><th>Nome</th><th>Descrição</th><th>Status</th> </tr></thead><tbody><tr *ngFor="let t of tickets"><td>{{t.id}}</td> <td>{{t.nome}}</td> <td>{{t.descricao}}</td><td>{{t.status}}</td></tr> </tbody></table></div> </div>',
            providers: [tickets_service_1.TicketsService]
        }), 
        __metadata('design:paramtypes', [tickets_service_1.TicketsService])
    ], TicketsComponent);
    return TicketsComponent;
}());
exports.TicketsComponent = TicketsComponent;
//# sourceMappingURL=tickets.component.js.map