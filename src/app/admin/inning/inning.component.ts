import { Component, OnInit } from '@angular/core';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-inning',
  templateUrl: './inning.component.html',
  styleUrls: ['./inning.component.css']
})
export class InningComponent implements OnInit {
  striker_batsman;
  bowler;
  possibleRuns;
  ball;
  over;
  description;
  constructor(public matchService:MatchService) { }

  ngOnInit() {
  }

}
