import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {
  nombreE: string = '';
  descripcionE: string = '';
  fechaInicio: Date;
  fechaFin: Date;

  constructor(private sExperiencia: SExperienciaService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const expe = new Experiencia(this.nombreE, this.descripcionE, this.fechaInicio, this.fechaFin);
    this.sExperiencia.save(expe).subscribe(
      data => {
        alert("Added");
        this.router.navigate(['']);
      }, err => {
        alert("Failed");
        this.router.navigate(['']);
      }
    )
  }

}
