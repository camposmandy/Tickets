"use strict";
var tickets_service_1 = require('./tickets.service');
var testing_1 = require('@angular/core/testing');
var http_1 = require('@angular/http');
var testing_2 = require('@angular/http/testing');
describe('Tickets Service test', function () {
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
    var backend;
    var service;
    var response;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [http_1.HttpModule],
            providers: [
                tickets_service_1.TicketsService,
                { provide: http_1.XHRBackend, useClass: testing_2.MockBackend }
            ]
        }).compileComponents();
    }));
    beforeEach(testing_1.inject([http_1.Http, http_1.XHRBackend], function (http, be) {
        backend = be;
        service = new tickets_service_1.TicketsService(http);
        var options = new http_1.ResponseOptions({ status: 200, body: { data: tickets } });
        response = new http_1.Response(options);
    }));
    it('should test: TicketsService was defined', function () {
        expect(service).toBeDefined();
    });
    it('should test: method was declared', function () {
        expect(service.getTickets).toBeDefined();
    });
    it('should test: method getTickets', function () {
        backend.connections.subscribe(function (c) { return c.mockRespond(response); });
        service.getTickets().toPromise().then(function (t) {
            expect(t).toEqual({ data: tickets });
        });
    });
});
//# sourceMappingURL=tickets.service.spec.js.map