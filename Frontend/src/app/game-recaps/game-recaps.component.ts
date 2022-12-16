  import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameRecapsService } from './game-recaps.service';

@Component({
  selector: 'app-game-recaps',
  templateUrl: './game-recaps.component.html',
  styleUrls: ['./game-recaps.component.scss']
})
export class GameRecapsComponent {
  public gameRecaps: any;
  constructor(private gameRecapsService: GameRecapsService, private router : ActivatedRoute) { }
  ngOnInit() {
    this.getGameRecaps(this.router.snapshot.params["id"]);
  }
  getGameRecaps(id: number) {
    this.gameRecapsService.getGameRecaps(id).subscribe(data => {
      this.gameRecaps = data;
      console.log(this.gameRecaps)
    });
  }
}
