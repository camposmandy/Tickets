import { browser, element, by } from 'protractor';
import { TicketsComponent } from 'C:/tickets-project/app/main/components/tickets.component';
import { TicketsService } from 'C:/tickets-project/app/main/services/tickets.service';
import { ComponentFixture, TestBed, async, inject } from '@angular/core/testing';
import { DebugElement, Component } from '@angular/core';
import { MockBackend } from '@angular/http/testing';
import {
  BaseRequestOptions,
  HttpModule,
  Http,
  Response,
  ResponseOptions
} from '@angular/http';


describe('Tickets Component cenario de falha',  () =>  {

    let fixture: ComponentFixture<TicketsComponent>;
    let comp: TicketsComponent;
    let ticketsService: TicketsService;
    let spy: jasmine.Spy;
    let jsonTickets =  [
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

    beforeEach( () => {
    	TestBed.configureTestingModule({
	       declarations: [ TicketsComponent ]
    	}).overrideComponent(TicketsComponent, {
    		set: {
    			providers: [ {provide: TicketsService, useValue: jsonTickets} ]
    		}
    	}).compileComponents();
    });

    it('should display: ..',() => {
    	
    });
});