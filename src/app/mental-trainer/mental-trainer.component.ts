import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { GameService } from '../game.service';

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
   private _showGameLength = 0
   speed = 0.3
   gameLoopVar:any
   lvl = '1'
   config:Params
   color = '000000'
   isRecords = false
   num_now = 0
   is_done = false
   is_game_over = false
   user_num = '0'
  constructor(private game:GameService, private cookie: CookieService) {
    this.config = {
      game_length:this.game_length,
      speed: this.speed,
      lvl: this.lvl
    }
   }
  ngOnInit(): void {
    this.getRandomColor()
  }
  ngOnChanges() {
    this.getRandomColor()
  }
  private generateNum(min:number, max:number) {
    return Math.floor(Math.random() * (max - min)) + min

  }
   private startAction() {
     this.getRandomColor()
      this.num_now = this.generateNum(-9,9)
      this.result += this.num_now
      this.game_length--
  }
  stepsSetter(s) {
    if(s === '+')
      this.game_length +=1
    else 
      this.game_length -=1
    if(this.game_length < 0)
      this.game_length = 0
  }
  speedSetter(s) {
    if(s === '+')
      this.speed += 0.1
    else 
    this.speed -= 0.1
    if(this.speed < 0.1)
    this.speed = 0.1
    this.speed.toFixed(2)
  }

  checkSteps() {
    if(this.game_length <= 0)
      return true
    return false
  }
  gameLoop() {
    this._showGameLength = this.game_length
    this.gameLoopVar = setInterval(()=>{
      this.startAction()
      if(this.game_length <= 0) {
        this.is_done = true
        clearInterval(this.gameLoopVar);
      }
    }, this.config.speed * 800);
  }

  onKey(e:any) {
    this.user_num = e.target.value;
  }

  getRandomColor() {
    let color = Math.floor(0x1000000 * Math.random()).toString(16);
    this.color = '#' + ('000000' + color).slice(-6);
  }
  showAnswer() {
    if(this.is_game_over === false && this.game_length === 0){
      this.is_game_over = true
      const data = {
        user_name: this.cookie.get('login'),
        speed: this.speed,
        result: parseInt(this.user_num).toFixed(2),
        steps: this._showGameLength,
        right_result: this.result,
        date: Date.now()
      }
      if(parseInt(this.user_num) === this.result){
        this.game.setInfoGame(data).subscribe((res:any)=>{
          console.log(res)
        })
        alert("Совершенно верно!")
      } else {
        this.game.setInfoGame(data).subscribe((res:any)=>{
          console.log(res)
        })
        alert("Ответ неверный(")
      }
    }
    else 
    this.is_game_over = false
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
