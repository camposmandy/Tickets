import { Component } from '@angular/core';
import {TicketsService} from '../services/tickets.service';
import {Ticket} from '../modules/ticket';

@Component({
    selector: 'tickets-component',
    templateUrl: 'app/main/templates/tickets.template.html',
	providers: [TicketsService]
})


export class TicketsComponent {
	constructor(private ticketsService: TicketsService) {}

	tickets: Ticket[];
	ngOnInit(): void {
		this.getTickets();
	}

	getTickets():void{
		this.ticketsService.getTickets().then(tickets => this.tickets = tickets);
	}
}