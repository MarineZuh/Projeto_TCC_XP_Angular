import { TestBed } from '@angular/core/testing';

import { ModalMsgFormsService } from './modal-msg-forms.service';

describe('ModalMsgFormsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ModalMsgFormsService = TestBed.get(ModalMsgFormsService);
    expect(service).toBeTruthy();
  });
});
