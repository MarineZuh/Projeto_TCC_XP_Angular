import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { ModalComponent } from '@shared/components/modal/modal.component';
import { Professor } from '@shared/models/professor';
import { ProfessorService } from '../../services/professor.service';

@Component({
  selector: 'app-modal-busca-orientador',
  templateUrl: './modal-busca-orientador.component.html',
  styleUrls: ['./modal-busca-orientador.component.css']
})
export class ModalBuscaOrientadorComponent implements OnInit {

  @Output() selecaoFeita = new EventEmitter<Professor>();
  @ViewChild('modal', {static: true}) private modal: ModalComponent;
  professores: Professor[];

  constructor(
    private professorService: ProfessorService,
  ) { }

  ngOnInit() {

  }

  abrir() {
    this.modal.exibir();
  }

  selecionar(professor: Professor){
    this.modal.fechar();
    this.selecaoFeita.emit(professor);
  }
  buscar(valor){
   console.log(valor);
   this.professorService.buscarPorNome(valor).subscribe(resp => {

    if(resp[0] === null) return;
    console.log(resp);
    this.professores = resp

    });
  }
}
