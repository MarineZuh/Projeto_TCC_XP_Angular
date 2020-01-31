import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ModalMsgFormsService } from '../../services/modal-msg-forms.service';
import { Subscription } from 'rxjs';
import { ModalMsgFormsConfig } from '../../models/modal-msg-forms-config';
import { ModalComponent } from '@shared/components/modal/modal.component';

@Component({
  selector: 'app-modal-msg-forms',
  templateUrl: './modal-msg-forms.component.html',
  styleUrls: ['./modal-msg-forms.component.css']
})
export class ModalMsgFormsComponent implements OnInit, OnDestroy {

  private subs: Subscription;
  @ViewChild('modal', {static: true}) private modal: ModalComponent;
  
  config: ModalMsgFormsConfig = {
    tipo: 'error',
    titulo: '',
    msg: ''
  }; 

  constructor(
    private mmf: ModalMsgFormsService
  ) { }

  ngOnInit() {
    this.subs = this.mmf.msgCriada$.subscribe((config: ModalMsgFormsConfig) => {
      if(config === null) return;
      this.modal.fechar();
      this.config = config;
      this.modal.exibir();
    })
  }

  ngOnDestroy(){
    this.subs.unsubscribe();
  }

}
