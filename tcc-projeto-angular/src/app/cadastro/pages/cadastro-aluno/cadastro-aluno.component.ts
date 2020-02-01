import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import FormValidacaoCss from '@shared/util/form-validacao-css';
import { Aluno } from '@shared/models/aluno';
import { ModalMsgFormsService } from '../../services/modal-msg-forms.service';

@Component({
  selector: 'app-cadastro-aluno',
  templateUrl: './cadastro-aluno.component.html',
  styleUrls: ['./cadastro-aluno.component.css']
})
export class CadastroAlunoComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private fb: FormBuilder,
    private mmf: ModalMsgFormsService
  ) { }

  ngOnInit() {
    this.initFormulario();
  }

  private initFormulario(){
    this.formulario = this.fb.group({
      id: null,
      nome: [null, [Validators.required] ],
      curso:[null, [Validators.required] ],
      email: [null, [Validators.required, Validators.email] ],
    });
  }

  salvar(){
    if(this.formulario.invalid) {
      this.formulario.markAllAsTouched();
      console.log(this.formulario);
      // exibir mensagem error
      this.mmf.novaMsgFalha('Dados Inválidos!', 'Cheque os dados informados.');
      return;
    }
    const aluno = new Aluno(this.formulario.value);
    console.log(aluno);
    this.mmf.novaMsgSucesso('Aluno Salvo!', 'Cadastro concluido com sucesso.');
  }

  validacaoCss(nomeControle: string){
   return FormValidacaoCss.cssInvalido(this.formulario.get(nomeControle) as FormControl);
  }

}
