import { Component, OnInit } from '@angular/core';

interface Params {
  game_length: number;
  speed: number;
  lvl: string;
}

@Component({
  selector: 'app-mental-trainer',
  templateUrl: './mental-trainer.component.html',
  styleUrls: ['./mental-trainer.component.scss']
})
export class MentalTrainerComponent implements OnInit {

   result = 0
   game_length = 10
   speed = 0.1
   gameLoopVar:any
   lvl = '1'
   config:Params

  constructor() {
    this.config = {
      game_length:this.game_length,
      speed: this.speed,
      lvl: this.lvl
    }
   }

  ngOnInit(): void {
  }
  private generateNum(min:number, max:number) {
    return Math.floor(Math.random() * (max - min)) + min

  }
   private startAction() {
      this.result += this.generateNum(-9,9)
      this.game_length--
      console.log(this.game_length)
  }

  gameLoop(game_length) {
    this.gameLoopVar = setInterval(()=>{
      this.startAction()
      if(this.game_length <= 0) {
        clearInterval(this.gameLoopVar);
        this.game_length = game_length
      }
    }, this.config.speed * 1000);
  }

  showAnswer(){

  }

}
