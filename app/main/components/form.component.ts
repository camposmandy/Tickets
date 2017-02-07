import { Component } from '@angular/core';
import { Ticket } from '../modules/ticket';
import { Status } from '../modules/status';

@Component({
    selector: 'form-component',
    templateUrl: 'app/main/templates/form.template.html'
})

export class FormComponent {
	ticket: Ticket = new Ticket();
	teste: Ticket = new Ticket();
	tickets: Ticket[] = [];
	status: Status[] = [
		{
			id: 1, 
			descricao: 'TO DO'
		},
		{
			id: 2, 
			descricao: 'DOING'
		},
		{
			id: 3, 
			descricao: 'DONE'
		}
	];

	ngOnInit(): void {
	}

	adicionar(t: Ticket): void {
		if(!t.atualizando){
	  		let ticket = new Ticket();
			ticket.id = new Date().getTime();
			ticket.nome = t.nome;
			ticket.descricao = t.descricao;
			ticket.status = t.status;
			ticket.atualizando = false;
	  		this.tickets.push(ticket);
	  		this.ticket = new Ticket();
	  	} else {
	  		t.atualizando = false;
	  		this.ticket = new Ticket();
	  	}
	}

	remover(t: Ticket): void {
		this.tickets.splice(this.tickets.indexOf(t), 1);
	}

	atualizar(t: Ticket): void{
		t.atualizando = true;
		this.ticket = t;
	}
	//https://github.com/edjansantos/angular2-webpack-starter
}