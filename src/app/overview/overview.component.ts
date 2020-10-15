import { Component, OnInit } from '@angular/core';
import { DataService } from  '../core/service/data.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }
  
  buySellRate = this.dataService.getBuySellRate();
}
