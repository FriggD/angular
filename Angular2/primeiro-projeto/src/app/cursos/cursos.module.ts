import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos.component';



@NgModule({
  declarations: [
    CursosComponent,
    CursoDetalheComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CursosComponent,
    //CursoDetalheComponent
  ]
})
export class CursosModule { }
