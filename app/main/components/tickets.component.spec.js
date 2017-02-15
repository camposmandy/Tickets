"use strict";
var tickets_component_1 = require('../components/tickets.component');
var tickets_service_1 = require('C:/tickets-project/app/main/services/tickets.service');
var testing_1 = require('@angular/core/testing');
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var testing_2 = require('@angular/http/testing');
describe('Tickets Component test', function () {
    var comp;
    var fixture;
    var _ticketsComponent;
    var spy;
    var tickets = [
        {
            "id": 1,
            "nome": "A",
            "descricao": "Primeira letra do alfabeto.",
            "status": "TO DO",
            "atualizando": false
        },
        {
            "id": 2,
            "nome": "B",
            "descricao": "Segunda letra do alfabeto.",
            "status": "TO DO",
            "atualizando": false
        },
        {
            "id": 3,
            "nome": "C",
            "descricao": "Terceira letra do alfabeto.",
            "status": "TO DO",
            "atualizando": false
        }
    ];
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [tickets_component_1.TicketsComponent],
            schemas: [core_1.NO_ERRORS_SCHEMA],
            providers: [
                http_1.BaseRequestOptions,
                testing_2.MockBackend,
                {
                    provide: http_1.Http,
                    useFactory: function (backend, defaultOptions) {
                        return new http_1.Http(backend, defaultOptions);
                    },
                    deps: [testing_2.MockBackend, http_1.BaseRequestOptions]
                },
                tickets_service_1.TicketsService
            ]
        }).compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(tickets_component_1.TicketsComponent);
        comp = fixture.componentInstance;
        fixture.detectChanges();
        spyOn(comp, 'loadTickets').and.returnValue(tickets);
    });
    it('should test: TicketsComponent was defined', function () {
        expect(comp).toBeDefined();
    });
    it('should test: method loadTickets was defined', function () {
        expect(comp.loadTickets).toBeDefined();
    });
    it('should test: method loadTickets', function () {
        var res = comp.loadTickets();
        expect(comp.loadTickets).toHaveBeenCalled();
        expect(res).toEqual(tickets);
    });
});
//# sourceMappingURL=tickets.component.spec.js.map