import { Component, OnInit } from '@angular/core';
import { Usuario } from '../editar-usuario/usuario';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.scss']
})
export class EditarUsuarioComponent implements OnInit {

  usuario: Usuario;

  constructor() {

    this.usuario = new Usuario("Juan", "Medina", 0)
  }


  
  ngOnInit(): void {
  }

  onSubmit (){
console.log("entro")
  }

}
