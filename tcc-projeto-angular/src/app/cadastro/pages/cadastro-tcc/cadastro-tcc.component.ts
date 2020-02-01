import { Component, OnInit } from "@angular/core";
import { ProjetoTcc } from "@shared/models/projeto-tcc";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from "@angular/forms";
import FormValidacaoCss from "@shared/util/form-validacao-css";
import { Professor } from '@shared/models/professor';
import { Aluno } from '@shared/models/aluno';
import { ModalMsgFormsService } from '../../services/modal-msg-forms.service';
import { TccService } from '../../services/tcc.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: "app-cadastro-tcc",
  templateUrl: "./cadastro-tcc.component.html",
  styleUrls: ["./cadastro-tcc.component.css"]
})
export class CadastroTccComponent implements OnInit {
  formulario: FormGroup;

  constructor(
    private fb: FormBuilder,  
    private mmf: ModalMsgFormsService,
    private tccService: TccService,
  ) {}

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
        departamento: null,
        email: null,
        formacao: null
      }),
      orientando: this.fb.group({
        id: null,
        nome: [null, [Validators.required]],
        curso: null,
        email: null
      })
    });
    // this.formulario.get('orientador.nome').disable();
    // this.formulario.get('orientando.nome').disable();
  }

  salvar() {
    if (this.formulario.invalid) {
      this.formulario.markAllAsTouched();
      console.log(this.formulario);
      this.mmf.novaMsgFalha('Dados Inválidos!', 'Cheque os dados informados.');
      return;
    }
    const projetoTcc = new ProjetoTcc(this.formulario.value);
    this.formulario.disable();
    console.log(projetoTcc);
    this.tccService.salvar(projetoTcc).pipe(
      finalize(() => {
        this.formulario.reset();
        this.formulario.enable();
      })
    ).subscribe(res => {
      this.mmf.novaMsgSucesso('Projeto Salvo!', 'Cadastro concluido com sucesso.');
    }, err => {
      this.mmf.novaMsgFalha('Erro ao salvar!', 'Não foi possivel salvar o projeto. Tente novamente mais tarde...');
    });
  }

  validacaoCss(nomeControle: string) {
    return FormValidacaoCss.cssInvalido(
      this.formulario.get(nomeControle) as FormControl
    );
  }

  setOrientador(orientador: Professor) {
    this.formulario.get('orientador').patchValue(orientador);
  }

  setOrientando(orientando: Aluno) {
    this.formulario.get('orientando').patchValue(orientando);
  }
}
