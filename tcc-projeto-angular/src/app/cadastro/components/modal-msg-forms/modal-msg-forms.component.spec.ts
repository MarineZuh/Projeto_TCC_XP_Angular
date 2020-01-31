import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalMsgFormsComponent } from './modal-msg-forms.component';

describe('ModalMsgFormsComponent', () => {
  let component: ModalMsgFormsComponent;
  let fixture: ComponentFixture<ModalMsgFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalMsgFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalMsgFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
