import { Component, OnInit } from "@angular/core";
import { ProjetoTcc } from "@shared/models/projeto-tcc";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from "@angular/forms";
import FormValidacaoCss from "@shared/util/form-validacao-css";

@Component({
  selector: "app-cadastro-tcc",
  templateUrl: "./cadastro-tcc.component.html",
  styleUrls: ["./cadastro-tcc.component.css"]
})
export class CadastroTccComponent implements OnInit {
  formulario: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.initFormulario();
  }

  private initFormulario() {
    this.formulario = this.fb.group({
      id: null,
      tema: [null, [Validators.required]],
      orientador: this.fb.group({
        id: null,
        nome: [null, [Validators.required]],
        sobrenome: null,
        departamento: null,
        email: null,
        formacao: null
      }),
      orientando: this.fb.group({
        id: null,
        nome: [null, [Validators.required]],
        sobrenome: null,
        curso: null,
        email: null
      })
    });
    this.formulario.get('orientador.nome').disable();
    this.formulario.get('orientando.nome').disable();
  }

  salvar() {
    if (this.formulario.invalid) {
      this.formulario.markAllAsTouched();
      console.log(this.formulario);
      // exibir mensagem error
      return;
    }
    const projetoTcc = new ProjetoTcc(this.formulario.value);
    console.log(projetoTcc);
  }

  validacaoCss(nomeControle: string) {
    return FormValidacaoCss.cssInvalido(
      this.formulario.get(nomeControle) as FormControl
    );
  }
}
