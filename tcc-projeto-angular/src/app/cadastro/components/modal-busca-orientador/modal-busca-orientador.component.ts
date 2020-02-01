import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from '@shared/components/modal/modal.component';
import { Professor } from '@shared/models/professor';

@Component({
  selector: 'app-modal-busca-orientador',
  templateUrl: './modal-busca-orientador.component.html',
  styleUrls: ['./modal-busca-orientador.component.css']
})
export class ModalBuscaOrientadorComponent implements OnInit {

  @ViewChild('modal', {static: true}) private modal: ModalComponent;
  professores: Professor[] = [];

  constructor() { }

  ngOnInit() {
    this.professores.push({
      id:1, nome:'professor01',  departamento: 'DAE', email:'', formacao:''
    });
    this.professores.push({
      id:2, nome:'professor02',  departamento: 'DAE', email:'', formacao:''
    });
  }

  abrir() {
    this.modal.exibir();
  }

  selecionar(){
    this.modal.fechar();
  }

}
