import { Injectable } from '@angular/core';
import { ProjetoTcc } from '@shared/models/projeto-tcc';
import { environment } from '@environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TccService {

  private apiUrl = environment.apiUrl + 'tcc';

  constructor(
    private http: HttpClient
  ) { }

  todos(): Observable<ProjetoTcc>{
    return this.http.get<ProjetoTcc>(this.apiUrl).pipe(map(dado=>new ProjetoTcc(dado)));
  }

  salvar(tcc: ProjetoTcc): Observable<ProjetoTcc> {
    return this.http.post<ProjetoTcc>(this.apiUrl, tcc);
  }
}
