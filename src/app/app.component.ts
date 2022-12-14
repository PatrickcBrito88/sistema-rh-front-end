import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // define o seletor, a tag que será usada para definir este componente
  templateUrl: './app.component.html', // código html que vai renderizar quando este componente for chamado
  styleUrls: ['./app.component.css'] // codigo css que vai renderizar quando este componente for chamado
})
export class AppComponent {
  title = 'Sistemas Recursos Humanos';
  nome = 'Patrick'

  adicionar(){
    console.log (`Adicionando ${this.nome}`)
    const numero = Math.round(Math.random() * 100);
    this.nome = 'João' + numero
  }

  alterarNome(event: any){
    this.nome = event.target.value
  }


}
