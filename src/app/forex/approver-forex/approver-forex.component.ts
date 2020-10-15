import { Component, OnInit } from '@angular/core';
import { Router } from  '@angular/router';
import { DataService } from  '../../core/service/data.service';

@Component({
  selector: 'app-approver-forex',
  templateUrl: './approver-forex.component.html',
  styleUrls: ['./approver-forex.component.css']
})
export class ApproverForexComponent implements OnInit {

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
  }

  Value = this.dataService.getBuySellRate();

  rejectRecord(index) {
    console.log(index)
    this.dataService.deleteIndex(index);
    this.Value.splice(index, 1);
  }

  approveRecord(index) {
    this.dataService.deleteIndex(index);
    this.Value.splice(index, 1);
  }
}
