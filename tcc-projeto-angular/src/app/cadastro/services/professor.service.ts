import { Injectable } from "@angular/core";
import { environment } from "@environments/environment";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Professor } from "@shared/models/professor";

@Injectable({
  providedIn: "root"
})
export class ProfessorService {
  private apiUrl = environment.apiUrl + "professor";

  constructor(private http: HttpClient) {}

  todos(): Observable<Professor[]> {
    return this.http
      .get<Professor[]>(this.apiUrl)
      .pipe(map(dados => dados.map(p => new Professor(p))));
  }

  salvar(professor: Professor): Observable<Professor> {
    return this.http.post<Professor>(this.apiUrl, professor);
  }

  buscarPorNome(nome: string): Observable<Professor[]> {
    const params = new HttpParams().set("nome", nome);
    return this.http
      .get<Professor[]>(this.apiUrl + "/busca", { params: params })
      .pipe(
        map((professores: Professor[]) =>
          professores.map(professor => new Professor(professor))
        )
      );
  }
}
