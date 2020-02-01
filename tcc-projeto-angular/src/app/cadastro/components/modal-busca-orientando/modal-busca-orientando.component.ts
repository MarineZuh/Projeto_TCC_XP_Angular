import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from '@shared/components/modal/modal.component';
import { Aluno } from '@shared/models/aluno';

@Component({
  selector: 'app-modal-busca-orientando',
  templateUrl: './modal-busca-orientando.component.html',
  styleUrls: ['./modal-busca-orientando.component.css']
})
export class ModalBuscaOrientandoComponent implements OnInit {
  @ViewChild('modal', {static: true}) private modal: ModalComponent;
  alunos: Aluno[] = [];

  constructor() { }

  ngOnInit() {
    this.alunos.push({
      id:1, nome:'aluno01', curso: 'SI', email: ''
    });
    this.alunos.push({
      id:2, nome:'aluno02', curso: 'SI', email:''
    });
  }

  abrir() {
    this.modal.exibir();
  }

  selecionar(){
    this.modal.fechar();
  }
}
