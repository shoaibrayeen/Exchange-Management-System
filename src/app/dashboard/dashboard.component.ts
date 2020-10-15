import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';
import { Router } from  '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router, private formBuilder: FormBuilder) { }

  searchForm: FormGroup;
  isSubmitted  =  false;

  ngOnInit(): void {
    this.searchForm  =  this.formBuilder.group({
      search: [''],
      sender_country: [''],
      receiver_country: ['']
    });
  }

  Value = [
    [ '123456781', '22/10/2020 22:08', 'Uganda', '1000', '990', 'Kenya', '1037', '1037', '2.98', 'Failure' ],
    [ '123456782', '22/10/2020 22:08', 'Uganda', '1000', '990', 'Kenya', '1037', '1037', '2.98', 'Successful' ],
    [ '123456783', '22/10/2020 22:08', 'Uganda', '1000', '990', 'Kenya', '1037', '1037', '2.98', 'Failure' ],
    [ '123456784', '22/10/2020 22:08', 'Uganda', '1000', '990', 'Kenya', '1037', '1037', '2.98', 'Successful' ],
    [ '123456785', '22/10/2020 22:08', 'Uganda', '1000', '990', 'Kenya', '1037', '1037', '2.98', 'Successful' ],
    [ '123456786', '22/10/2020 22:08', 'Uganda', '1000', '990', 'Kenya', '1037', '1037', '2.98', 'Failure' ],
    [ '123456787', '22/10/2020 22:08', 'Uganda', '1000', '990', 'Kenya', '1037', '1037', '2.98', 'Successful' ]
  ]
  searchRecord(){
    this.isSubmitted = true;
    if(this.searchForm.invalid){
      return;
    }
    console.log(this.searchForm.value)
    
  }
  
}
