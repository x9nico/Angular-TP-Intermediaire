import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Player } from './player.model';
import { environment } from '../environnement/environnement';


@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  

  constructor(private http: HttpClient) {}

  // GET all players
  getAll(): Observable<Player[]> {
    return this.http.get<Player[]>(`${environment.backendUrl}/player`);
  }

  // GET player by ID
  getById(id: number): Observable<Player> {
    return this.http.get<Player>(`${environment.backendUrl}/player/${id}`);
  }

  // CREATE player
  create(player: Player): Observable<Player> {
    return this.http.post<Player>(`${environment.backendUrl}/player`, player);
  }

  // UPDATE player
  update(id: number, player: Player): Observable<Player> {
    return this.http.patch<Player>(`${environment.backendUrl}/player/${id}`, player);
  }

  // DELETE player
  delete(id: number): Observable<Player> {
    return this.http.delete<Player>(`${environment.backendUrl}/player/${id}`);
  }

}

