import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Banda } from './banda.model';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class BandasService {

  private apiUrl: string = environment.baseUrl;

constructor(private http: HttpClient) { }

getBandas(): Observable<Banda[]>
{
  return this.http.get<Banda[]>(this.apiUrl);
}

}
