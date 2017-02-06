import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule }   from '@angular/forms';

import { MainComponent }  from './components/main.component';
import { TicketsComponent  }  from './components/tickets.component';
import { FormComponent  }  from './components/form.component';


const appRoutes: Routes = [
  { path: 'tickets',    component: TicketsComponent },
  { path: 'addTicket',  component: FormComponent },
  { path: '',
    redirectTo: '/tickets',
    pathMatch: 'full'
  }

];

@NgModule({
  imports:      [ BrowserModule, RouterModule.forRoot(appRoutes), FormsModule ],
  declarations: [ MainComponent, TicketsComponent, FormComponent ],
  bootstrap:    [ MainComponent ]
})
export class MainModule { }
