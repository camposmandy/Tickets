import { Injectable } from '@angular/core';
import { Ticket } from '../modules/ticket';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Rx'

@Injectable()
export class TicketsService {
	constructor(private http: Http) {}

	OnInit() {
	}

	getTickets(): Observable<Ticket[]>{
		return this.http.get('app/main/data/ticket.data.json').map((res)=>res.json()).catch((error:any)=>Observable.throw(error.json().error || 'Server error by amanda'));
	}
}