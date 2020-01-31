import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalBuscaOrientandoComponent } from './modal-busca-orientando.component';

describe('ModalBuscaOrientandoComponent', () => {
  let component: ModalBuscaOrientandoComponent;
  let fixture: ComponentFixture<ModalBuscaOrientandoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalBuscaOrientandoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalBuscaOrientandoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
