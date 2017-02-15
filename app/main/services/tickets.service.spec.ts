import { TicketsService } from './tickets.service';
import { async, inject, TestBed } from '@angular/core/testing';
import { Response,ResponseOptions, Http, HttpModule, XHRBackend } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

describe('Tickets Service test', () => {
	let tickets: any = [
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
	let backend: MockBackend;
	let service: TicketsService;
	let response: Response;
  	beforeEach(async(() => {
    	TestBed.configureTestingModule({
		    imports: [HttpModule], 
		    providers: [
		        TicketsService,
		       { provide: XHRBackend, useClass: MockBackend }
	        ]
		  }).compileComponents();	
	}));
  	
  	beforeEach(inject([Http, XHRBackend], (http: Http, be: MockBackend) => {
  		backend = be;
  		service = new TicketsService(http);
  		let options = new ResponseOptions({status: 200, body: {data: tickets}});
  		response = new Response(options);
  	}));

  	it('should test: TicketsService was defined', () => {
        expect(service).toBeDefined();
  	});

  	it('should test: method was declared', () => {
  		expect(service.getTickets).toBeDefined();
  	});

	it('should test: method getTickets', () => {	
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(response));
        service.getTickets().toPromise().then(t =>{
        	expect(t).toEqual({data: tickets});
        });
	});
});