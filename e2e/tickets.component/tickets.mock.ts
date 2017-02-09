import { TicketsService } from 'C:/tickets-project/app/main/services/tickets.service';

export class MockTicketsService {
  getTickets: any;
  json = [
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

  constructor(private ticketsService: TicketsService) {
    this.getTickets = jasmine.createSpy('getTickets').and.callFake(
      () => Promise
        .resolve(true)
        .then(() => Object.assign({}, this.json))
    );
  }
}