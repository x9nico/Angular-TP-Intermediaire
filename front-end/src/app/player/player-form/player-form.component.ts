import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Player } from '../player.model';
import { PlayerService } from '../player.service';


@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.scss']
})
export class PlayerFormComponent implements OnInit {
  playerForm: FormGroup;
  player: Player;
  isEditMode: boolean;


  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private playerService: PlayerService
  ) { }

  ngOnInit() {


    this.playerForm = this.formBuilder.group({
      name: new FormControl(undefined),
      age: new FormControl(undefined),
      nationality: new FormControl(undefined),
      image: new FormControl(undefined),
      poste: new FormControl(undefined),
    });

    this.initFields();

  }

  get controls() {
    return this.playerForm.controls;
  }

  onSubmit() {
    if (this.playerForm.invalid) {
      console.log('error');
      return;
    }

    this.player.name = this.controls['name'].value;
    this.player.age = this.controls['age'].value;
    this.player.nationality = this.controls['nationality'].value;
    this.player.poste = this.controls['poste'].value;
    this.player.image = this.controls['image'].value;

    if (this.isEditMode) {
      confirm('Are you sure you want to update this player?')
      this.playerService.update(this.player.id, this.player).subscribe(() => {
        // Update the player's information in the database
        this.router.navigate(['player']);
      });
    } else {
      this.playerService.create(this.player).subscribe(() => {
        this.router.navigate(['player']);
      });
    }
  }

  initFields() {
    const playerId = this.activatedRoute.snapshot.paramMap.get('id');
    this.playerService.getAll().subscribe(players => {
      const player = players.find(player => player.id.toString() === playerId);
      if (player) {
        this.isEditMode = true;
        this.player = player;
        this.playerForm = this.formBuilder.group({
          name: new FormControl(this.player.name, Validators.required),
          age: new FormControl(this.player.age, Validators.required),
          nationality: new FormControl(this.player.nationality, Validators.required),
          image: new FormControl(this.player.image),
          poste: new FormControl(this.player.poste, Validators.required),
        });
      } else {
        this.isEditMode = false;
        const maxId = players.length > 0 ? Math.max(...players.map(p => p.id)) : 0;
        const newId = maxId + 1;
        this.player = new Player(newId, '', 0, '', '', '');
        this.playerForm = this.formBuilder.group({
          name: new FormControl(this.player.name, Validators.required),
          age: new FormControl(this.player.age, Validators.required),
          nationality: new FormControl(this.player.nationality, Validators.required),
          image: new FormControl(this.player.image),
          poste: new FormControl(this.player.poste, Validators.required),
        });
      }
    });
  }


  deletePlayer() {
    if (confirm('Are you sure you want to delete this player?')) {
      this.playerService.delete(this.player.id).subscribe(() => {
        this.router.navigate(['player']);
      });
    }
  }
}