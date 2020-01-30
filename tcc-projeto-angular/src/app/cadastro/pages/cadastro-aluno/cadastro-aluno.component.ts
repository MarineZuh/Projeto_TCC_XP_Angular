import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import FormValidacaoCss from '@shared/util/form-validacao-css';
import { Aluno } from '@shared/models/aluno';

@Component({
  selector: 'app-cadastro-aluno',
  templateUrl: './cadastro-aluno.component.html',
  styleUrls: ['./cadastro-aluno.component.css']
})
export class CadastroAlunoComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.initFormulario();
  }

  private initFormulario(){
    this.formulario = this.fb.group({
      id: null,
      nome: [null, [Validators.required] ],
      sobrenome: [null, [Validators.required] ],
      curso:[null, [Validators.required] ],
      email: [null, [Validators.required, Validators.email] ],
    });
  }

  salvar(){
    if(this.formulario.invalid) {
      this.formulario.markAllAsTouched();
      console.log(this.formulario);
      // exibir mensagem error
      return;
    }
    const aluno = new Aluno(this.formulario.value);
    console.log(aluno);
  }

  validacaoCss(nomeControle: string){
   return FormValidacaoCss.cssInvalido(this.formulario.get(nomeControle) as FormControl);
  }

}
