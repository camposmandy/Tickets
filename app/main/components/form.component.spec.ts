import { FormComponent } from './form.component';
import { Ticket } from '../modules/ticket';

describe('Form Component test', () => {
 	let form: FormComponent = new FormComponent();
	let ticket: Ticket = {
		id: 1,
     	nome: 'A',
      	descricao: 'Primeira letra do alfabeto.',
      	status: 'TO DO',
      	atualizando: false
	};

	let t: Ticket = {
		id: 1,
     	nome: 'A',
      	descricao: 'Primeira letra do alfabeto.',
      	status: 'TO DO',
      	atualizando: true
	}, tickets: Ticket[] = [
			ticket,
		{
			"id": 2,
			"nome": "B",
			"descricao": "Segunda letra do alfabeto.",
			"status": "TO DO",
			"atualizando": false
		} 
	];

	beforeEach(() => {
		spyOn(form, 'atualizar').and.returnValue(t);
		spyOn(form, 'adicionar').and.returnValue(tickets);
		spyOn(form, 'remover').and.returnValue(tickets[0]);
	});

	it('should test: method atualizar', () => {
		expect(form.atualizar).toBeDefined();
			let res = form.atualizar(ticket);
			ticket.atualizando = true;
		expect(form.atualizar).toHaveBeenCalled();
		expect(res).toEqual(tickets[0]);
	});
	it('should test: method adicionar', () => {
		expect(form.adicionar).toBeDefined();
			ticket.atualizando = false;
			let res = form.adicionar(ticket);
		expect(form.adicionar).toHaveBeenCalled();
		expect(res).toEqual(tickets);
	});
	it('should test: method remover', () => {
		expect(form.remover).toBeDefined();
			let res = form.remover(tickets[1]);
		expect(form.remover).toHaveBeenCalled();
		expect(res).toEqual(tickets[0]);
	});
});
