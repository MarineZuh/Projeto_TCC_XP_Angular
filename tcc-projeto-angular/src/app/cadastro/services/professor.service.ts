import { Injectable } from "@angular/core";
import { environment } from "@environments/environment";
import { HttpClient } from "@angular/common/http";
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
}
