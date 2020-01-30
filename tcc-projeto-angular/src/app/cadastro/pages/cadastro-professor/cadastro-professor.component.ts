import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Professor } from 'src/app/shared/models/professor';
import FormValidacaoCss from 'src/app/shared/util/form-validacao-css';


@Component({
  selector: 'app-cadastro-professor',
  templateUrl: './cadastro-professor.component.html',
  styleUrls: ['./cadastro-professor.component.css']
})
export class CadastroProfessorComponent implements OnInit {

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
      departamento:[null, [Validators.required] ],
      email: [null, [Validators.required, Validators.email] ],
      formacao:[null, [Validators.required] ],
    });
  }

  salvar(){
    if(this.formulario.invalid) {
      this.formulario.markAllAsTouched();
      console.log(this.formulario);
      // exibir mensagem error
      return;
    }
    const professor = new Professor(this.formulario.value);
    console.log(professor);
  }

  validacaoCss(nomeControle: string){
   return FormValidacaoCss.cssInvalido(this.formulario.get(nomeControle) as FormControl);
  }

}
