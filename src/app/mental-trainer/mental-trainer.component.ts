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
   color = '000000'
   isRecords = false
  constructor() {
    this.config = {
      game_length:this.game_length,
      speed: this.speed,
      lvl: this.lvl
    }
   }
   ngDoCheck() {
     this.getRandomColor()
   }
  ngOnInit(): void {
  }
  private generateNum(min:number, max:number) {
    return Math.floor(Math.random() * (max - min)) + min

  }
   private startAction() {
      this.result += this.generateNum(-9,9)
      this.game_length--
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

  getRandomColor() {
    let color = Math.floor(0x1000000 * Math.random()).toString(16);
    this.color = '#' + ('000000' + color).slice(-6);
  }
  
  toRecords() {
    if(this.isRecords === true) {
      this.isRecords = false
    }
    else { 
      this.isRecords = true
    }
  }
}
