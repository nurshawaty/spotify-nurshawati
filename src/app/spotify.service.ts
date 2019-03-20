import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {


  getHeader(query: string) {
    const url = environment.baseUrl + 'search?q=' + query;
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', 'Bearer BQBlToa8XAWhY1_KI1IfnxaEK2wWGK960qwyxMcV-FedBi5MrJ06kmh3hei8u2l0jQqQkO2CVK8klETpJWS5T4Y3hcecEWcufQuxe693U8RHa3j08pQvOK3s_BNzvyHJZck1Z7ugxdCCPgJuODhMpzZVgQfs2Zl6K4eQGA');

    return this.http.get(url, { headers });

  }

  constructor(private http: HttpClient) { }

  searchMusic(str: string, type = '&type=artist') {

    const param = '&offset=0&limit=20' + type + '&market=US';
    const query = str + param;
    return this.getHeader(query);
  }

  getArtist(id: string) {
    const query = 'artists/${id}';
    return this.getArtist(query);
  }

  getAlbum(id: string) {
    const query = 'artists/${id}';
    return this.getArtist(query);
  }
}
