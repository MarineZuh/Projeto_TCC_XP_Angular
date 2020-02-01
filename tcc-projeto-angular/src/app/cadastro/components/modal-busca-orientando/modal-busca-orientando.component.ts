import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { ModalComponent } from '@shared/components/modal/modal.component';
import { Aluno } from '@shared/models/aluno';
import { AlunoService } from '../../services/aluno.service';

@Component({
  selector: 'app-modal-busca-orientando',
  templateUrl: './modal-busca-orientando.component.html',
  styleUrls: ['./modal-busca-orientando.component.css']
})
export class ModalBuscaOrientandoComponent implements OnInit {
  @Output() selecaoFeita = new EventEmitter<Aluno>();
  @ViewChild('modal', {static: true}) private modal: ModalComponent;
  alunos: Aluno[];

  constructor(
    private alunoService: AlunoService,
  ) { }

  ngOnInit() {
  
  }

  abrir() {
    this.modal.exibir();
  }

  selecionar(aluno: Aluno){
    this.modal.fechar();
    this.selecaoFeita.emit(aluno);
  }

  buscar(valor){
    console.log(valor);
    this.alunoService.todos().subscribe(resp => this.alunos = resp);
   }
}
