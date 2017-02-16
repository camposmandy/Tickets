import { Component } from '@angular/core';
import {TicketsService} from '../services/tickets.service';

@Component({
	moduleId: 'module.id', 
    selector: 'tickets-component',
    template: '<div class="jumbotron"> <h1>Tickets</h1> <p>Todos os tickets cadastrados.</p> <div class="table-responsive"> <table class="table table-striped"> <thead> <tr><th>Id</th><th>Nome</th><th>Descrição</th><th>Status</th> </tr></thead><tbody><tr *ngFor="let t of tickets"><td>{{t.id}}</td> <td>{{t.nome}}</td> <td>{{t.descricao}}</td><td>{{t.status}}</td></tr> </tbody></table></div> </div>',
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