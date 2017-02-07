import { Injectable } from '@angular/core';
import { Ticket } from '../modules/ticket';

@Injectable()
export class TicketsService {
	getTickets(): Promise<Ticket[]>{
		var tickets: Ticket[] = [
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
		return Promise.resolve(tickets);
	}
}