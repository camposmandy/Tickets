import { TicketsComponent } from '../components/tickets.component';
import { TicketsService } from 'C:/tickets-project/app/main/services/tickets.service';
import { async, inject, TestBed, ComponentFixture } from '@angular/core/testing';
import { DebugElement, NO_ERRORS_SCHEMA, Component } from '@angular/core';
import { BaseRequestOptions, ConnectionBackend, Http } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

describe('Tickets Component test', () => {
	let comp: TicketsComponent;
	let fixture: ComponentFixture<TicketsComponent>;
	let _ticketsComponent: TicketsComponent;
	let spy: jasmine.Spy;
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

  	beforeEach(async(() => {
    	TestBed.configureTestingModule({
		    declarations: [TicketsComponent], 
		    schemas: [NO_ERRORS_SCHEMA],
		     providers: [
		        BaseRequestOptions,
		        MockBackend,
		        {
		          provide: Http,
		          useFactory: (backend: ConnectionBackend, defaultOptions: BaseRequestOptions) => {
		            return new Http(backend, defaultOptions);
		          },
		          deps: [MockBackend, BaseRequestOptions]
		        },
		        TicketsService
	        ]
		  }).compileComponents();	
	}));
  	
  	beforeEach(() => {
  		fixture = TestBed.createComponent(TicketsComponent);
    	comp = fixture.componentInstance; 

		fixture.detectChanges();
		spyOn(comp, 'loadTickets').and.returnValue(tickets);
  	});


  	it('should test: TicketsComponent was defined', () => {
        expect(comp).toBeDefined();
  	});
  	it('should test: method loadTickets was defined', () => {
        expect(comp.loadTickets).toBeDefined();
  	});
	it('should test: method loadTickets', () => {
		let res = comp.loadTickets();
		expect(comp.loadTickets).toHaveBeenCalled();
		expect(res).toEqual(tickets);
	});
});