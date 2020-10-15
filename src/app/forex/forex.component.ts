import { Component, OnInit } from '@angular/core';
import { AuthService } from  '../core/service/auth.service';

@Component({
  selector: 'app-forex',
  templateUrl: './forex.component.html',
  styleUrls: ['./forex.component.css']
})
export class ForexComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }
  isApprover = this.authService.accessStatus();
}
