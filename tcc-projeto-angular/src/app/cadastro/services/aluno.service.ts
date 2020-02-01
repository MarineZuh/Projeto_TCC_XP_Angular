import { Injectable } from "@angular/core";
import { environment } from "@environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Aluno } from "@shared/models/aluno";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class AlunoService {
  private apiUrl = environment.apiUrl + "aluno";

  constructor(private http: HttpClient) {}

  todos(): Observable<Aluno[]> {
    return this.http
      .get<Aluno[]>(this.apiUrl)
      .pipe(map(dados => dados.map(p => new Aluno(p))));
  }

  salvar(aluno: Aluno): Observable<Aluno> {
    return this.http.post<Aluno>(this.apiUrl, aluno);
  }
}
