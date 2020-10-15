import { Component, OnInit } from '@angular/core';
import { Router } from  '@angular/router';
import { DataService } from  '../../core/service/data.service';

@Component({
  selector: 'app-initiator-forex',
  templateUrl: './initiator-forex.component.html',
  styleUrls: ['./initiator-forex.component.css']
})
export class InitiatorForexComponent implements OnInit {

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
  }

  Value = this.dataService.getBuySellRate();

  deleteRecord(index) {
    console.log(index)
    this.dataService.deleteIndex(index);
    this.Value.splice(index, 1);
  }
}
