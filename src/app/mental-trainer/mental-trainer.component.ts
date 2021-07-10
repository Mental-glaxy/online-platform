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
   nums_arr = [
    8, 1, -3, -4, 3, -5, 3, 3, -4, 7, -6, -2, 7, -3, 2, 1, 1, -6, 4, -5, 3, 4, -1, -3, -4, 5, -8, 5, -4, 4, 5, -7, 6, 2, -6, 1, 5, -4,
     3, -7, 8, -8, 3, -7, 8, 3, -6, 2, -7, 7, -3, 2, 1, -6, 8, 2, -5, -2, 5, -6,
     1, 3, 3, 1, 1, -5, 3, -5, 5, 2, -1, -5, 4, 2, -5, 4, -5, 6, -7, 5, 0, -6, 4, -8, 7, 1, 4, -4, 2, -6, 2, 2, -7, 6, 4, -2, -2, 2, -5, 5
   ]
   game_length = 100
   private _showGameLength = 0
   speed = 0.2
   gameLoopVar:any
   lvl = '1'
   config:Params
   color = '000000'
   isRecords = false
   num_now = 0
   is_done = false
   is_game_over = false
   hideMenus = false
   user_num = '0'
  constructor(private game:GameService, private cookie: CookieService) {
   }
  ngOnInit(): void {
    this.getRandomColor()
    
  }
  ngOnChanges() {
    this.getRandomColor()
  }

   private startAction(index:number) {
      this.getRandomColor()
      this.result += this.nums_arr[index]
      this.num_now = this.nums_arr[index]
      // this.num_now = this.generateNum(1,9)
      // while(this.result + this.num_now > 9){
      //   this.num_now = this.generateNum(-9,9)
      // }
      // this.result += this.num_now
      this.game_length--
  }
  stepsSetter(s) {
    // if(s === '+')
    //   this.game_length +=1
    // else 
    //   this.game_length -=1
    // if(this.game_length < 0)
    //   this.game_length = 0
  }
  speedSetter(s) {
    // if(s === '+')
    //   this.speed += 0.1
    // else 
    // this.speed -= 0.1
    // if(this.speed < 0.1)
    // this.speed = 0.1
    // this.speed.toFixed(2)
  }

  checkSteps() {
    if(this.game_length <= 0)
      return true
    return false
  }
  gameLoop() {
    this.hideMenus = true
    this._showGameLength = this.game_length
    let i = 0
    this.gameLoopVar = setInterval(()=>{
      this.startAction(i)
      i+=1
      if(this.game_length <= 0) {
        this.is_done = true
        this.hideMenus = false
        clearInterval(this.gameLoopVar);
      }
    }, this.speed * 900);
  }

  onKey(e:any) {
    this.user_num = e.target.value;
  }
  onKeySpeed(e:any) {
    //this.speed = e.target.value;
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
      if(parseInt(this.user_num) === 6){
        this.game.setInfoGame(data).subscribe((res:any)=>{
          console.log(res)
        })
        alert("Совершенно верно!")
        setTimeout(()=>{this.resetGame()}, 5000)
      } else {
        this.game.setInfoGame(data).subscribe((res:any)=>{
          console.log(res)
        })
        alert("Ответ неверный(")
        setTimeout(()=>{this.resetGame()}, 5000)
      }
    }
    else 
    this.resetGame()
  }
  
  toRecords() {
    if(this.isRecords === true) {
      this.isRecords = false
    }
    else { 
      this.isRecords = true
    }
  }
  num_checker(num:number){
    if(num >= 0){
      return '+'+num
    }
    return  num
  }
  private resetGame() {
    this.is_game_over = false 
    this.speed = 0.3
    this.game_length = 100
    this.result = 0
    this.num_now = 0
    this.is_done = false
  }
}