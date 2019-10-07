import { Component } from '@angular/core';
import { Cliente } from './cliente';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hebert';
  client: Cliente = new Cliente();

  salvar() {
    console.log(this.client);
    
  }
}
