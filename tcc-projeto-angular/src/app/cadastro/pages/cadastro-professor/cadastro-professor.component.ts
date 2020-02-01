import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Professor } from 'src/app/shared/models/professor';
import FormValidacaoCss from 'src/app/shared/util/form-validacao-css';
import { ProfessorService } from '../../services/professor.service';
import { finalize } from 'rxjs/operators';
import { ModalMsgFormsService } from '../../services/modal-msg-forms.service';


@Component({
  selector: 'app-cadastro-professor',
  templateUrl: './cadastro-professor.component.html',
  styleUrls: ['./cadastro-professor.component.css']
})
export class CadastroProfessorComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private fb: FormBuilder,
    private professorService: ProfessorService,
    private mmf: ModalMsgFormsService,
  ) { }

  ngOnInit() {
    this.initFormulario();
  }

  private initFormulario(){
    this.formulario = this.fb.group({
      id: null,
      nome: [null, [Validators.required] ],
      departamento:[null, [Validators.required] ],
      email: [null, [Validators.required, Validators.email] ],
      formacao:[null, [Validators.required] ],
    });
  }

  salvar(){
    if(this.formulario.invalid) {
      this.formulario.markAllAsTouched();
      console.log(this.formulario);
      this.mmf.novaMsgFalha('Dados Inválidos!', 'Cheque os dados informados.');
      return;
    }
    const professor = new Professor(this.formulario.value);
    this.formulario.disable();
    console.log(professor);
    this.professorService.salvar(professor).pipe(
      finalize(() => {
        this.formulario.reset();
        this.formulario.enable();
      })
    ).subscribe(res => {
      this.mmf.novaMsgSucesso('Professor Salvo!', 'Cadastro concluido com sucesso.');
    }, err => {
      this.mmf.novaMsgFalha('Erro ao salvar!', 'Não foi possivel salvar o professor. Tente novamente mais tarde...');
    });
  }

  validacaoCss(nomeControle: string){
   return FormValidacaoCss.cssInvalido(this.formulario.get(nomeControle) as FormControl);
  }

}
