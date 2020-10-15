import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }
  
  reportForm: FormGroup;
  isSubmitted  =  false;
  showMessage = false;

  ngOnInit(): void {
    this.reportForm  =  this.formBuilder.group({
      from: ['', Validators.required],
      to: ['', Validators.required],
      sender_country: [''],
      receiver_country: [''],
      timezone: ['', Validators.required]
    });
  }

  get formControls() { return this.reportForm.controls; }

  generateReport() {
    this.isSubmitted = true;
    if(this.reportForm.invalid){
      alert('Kindly Fill the required fields!');
      return;
    }
    console.log(this.reportForm.value);
    this.showMessage = true;
    alert('Response is submitted');
    this.reportForm.reset();
  }
}
