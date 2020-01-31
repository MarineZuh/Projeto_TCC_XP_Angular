import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ModalMsgFormsConfig } from '../models/modal-msg-forms-config';

@Injectable({
  providedIn: 'root'
})
export class ModalMsgFormsService {

  private msgCriada = new BehaviorSubject<ModalMsgFormsConfig>(null);
  msgCriada$ = this.msgCriada.asObservable();

  constructor() { }

  novaMsgSucesso(titulo:string, mensagem: string){
    this.criarMsg({
      msg: mensagem,
      titulo: titulo,
      tipo: "sucesso",
    });
  }
  novaMsgFalha(titulo:string, mensagem: string){
    this.criarMsg({
      msg: mensagem,
      titulo: titulo,
      tipo: "error",
    });
  }

  private criarMsg(config: ModalMsgFormsConfig){
    this.msgCriada.next(config);
  }
}
