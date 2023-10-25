import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Player } from '../player.model';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-playerList',
  templateUrl: './playerList.component.html',
  styleUrls: ['./playerList.component.scss']
})

export class PlayerListComponent implements OnInit {

  playerList: Player[] = [];

  constructor(
    private router: Router,
    private playerService: PlayerService
  ) {}

  ngOnInit(): void {
    this.playerService.getAll().subscribe((players: Player[]) => {
      this.playerList = players;
    });
  }

  onSelectPlayer(player: Player) {
    this.router.navigate(['player/', player.id]);
  }
}