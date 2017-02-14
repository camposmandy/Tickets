import { Component } from '@angular/core';
import {TicketsService} from '../services/tickets.service';
@Component({
  selector: 'my-app',
  viewProviders: [TicketsService],
  templateUrl: './app/main/templates/nav.template.html'
})

export class MainComponent  { }
