import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clase1';
  usuarios: Array<{id: number, username: string, edad: number}> = [
    {
      id: 1,
      username: 'leomessi',
      edad: 34
    },
    {
      id: 2,
      username: 'bobesponja',
      edad: 15
    },
    {
      id: 3,
      username: 'Jon',
      edad: 19
    }
  ];

  usuariosFiltrados: Array<{ id: number; username: string; edad: number }> =
    this.usuarios;
  empleadoBuscar: string = '';
  handlerInput(e: any) {
    this.empleadoBuscar = e.target.value;
  }
  submitButton() {
    console.log(this.usuariosFiltrados);
    this.usuariosFiltrados = this.usuarios.filter(usuario =>
      usuario.username === this.empleadoBuscar
    );
  }
}
