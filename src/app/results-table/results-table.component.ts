import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-results-table',
  templateUrl: './results-table.component.html',
  styleUrls: ['./results-table.component.scss']
})
export class ResultsTableComponent implements OnInit {
  table_data = []
  isLoaded = false
  constructor(private game:GameService) { }

  ngOnInit(): void {
    this.getGamesInfo()
  }
  getGamesInfo() {
    this.game.getInfoGame().subscribe((data:any) =>{
      if (data.status === "successful"){
        this.table_data = data.data
        this.isLoaded = true
      }
      console.log(this.table_data)
    })
  }
}
