import { Component } from '@angular/core';
import {TicketsService} from '../services/tickets.service';

@Component({
    selector: 'tickets-component',
    templateUrl: 'app/main/templates/tickets.template.html',
	providers: [TicketsService]
})

export class TicketsComponent {
	constructor(private ticketsService: TicketsService) {}

	tickets: any;

	ngOnInit(): void {
		this.loadTickets();
	}

	loadTickets(){
		this.ticketsService.getTickets().subscribe(tickets => this.tickets = tickets, 
			err => { console.log('não foi dessa vez amanda', err);}
		);
	}
}