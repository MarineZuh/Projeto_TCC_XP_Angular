import { Component, OnInit, TemplateRef, ViewChild, Input } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @ViewChild('template', {static: true}) private template: TemplateRef<any>;
  @Input() titulo: string;

  private modalRef: BsModalRef;
  // private config: ModalOptions = {
  //   animated: true,
  //   class: 'modal-lg'
  // };
  
  constructor(private modalService: BsModalService) {}

  ngOnInit(){

  }
 
  exibir() {
    this.modalRef = this.modalService.show(this.template);
    this.modalRef.setClass('modal-lg');
  }

  fechar(){
    if(this.modalRef === undefined) return;
    this.modalRef.hide();
  }
}
