import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-newproject',
  templateUrl: './newproject.component.html',
  styleUrls: ['./newproject.component.css']
})
export class NewprojectComponent implements OnInit {

  nombreP: string;
  descripcionP: string;

  constructor(private proyectosS: ProyectosService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const proyecto = new Proyectos(this.nombreP, this.descripcionP);
    this.proyectosS.save(proyecto).subscribe(
      data =>{
        alert("Added");
        this.router.navigate(['']);
      }, err =>{
        alert("Failed");
        this.router.navigate(['']);
      }
    )
  }
}
