import { Component } from '@angular/core';
import { Ticket } from './ticket';

@Component({
    selector: 'tickets-component',
    templateUrl: 'app/main/templates/tickets.template.html'
})

export class TicketsComponent {
		tickets: Ticket[] = [
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

	ngOnInit(): void {
	}
}