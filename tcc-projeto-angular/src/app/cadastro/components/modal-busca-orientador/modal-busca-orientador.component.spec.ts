import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalBuscaOrientadorComponent } from './modal-busca-orientador.component';

describe('ModalBuscaOrientadorComponent', () => {
  let component: ModalBuscaOrientadorComponent;
  let fixture: ComponentFixture<ModalBuscaOrientadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalBuscaOrientadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalBuscaOrientadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
