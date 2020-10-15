import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';
import { Router } from  '@angular/router';
import { DataService } from  '../../core/service/data.service';


@Component({
  selector: 'app-initiator-account',
  templateUrl: './initiator-account.component.html',
  styleUrls: ['./initiator-account.component.css']
})
export class InitiatorAccountComponent implements OnInit {

  constructor(private dataService: DataService, private router: Router, private formBuilder: FormBuilder) { }

  newRecordForm: FormGroup;
  isSubmitted  =  false;
  isEdit = false;
  editRecordValues = {
    country: "",
    currency: ""
  };

  ngOnInit(): void {
    this.newRecordForm  =  this.formBuilder.group({
      country: [''],
      currency: [''],
      buyRate: ['', Validators.required],
      sellRate: ['', Validators.required]
    });
  }

  Value = this.dataService.getBuySellRate();
  addNewRecord() {
    this.isSubmitted = true;
    if(this.newRecordForm.invalid){
      alert('All Field are Required');
      return;
    }
    if(this.isEdit) {
      this.newRecordForm.value.country = this.editRecordValues.country;
      this.newRecordForm.value.currency = this.editRecordValues.currency;
    }
    else {
      if(this.newRecordForm.value.country === "" || this.newRecordForm.value.currency === "") {
        alert('Country and Currency are required fields');
        return;
      }
    }
    console.log(this.newRecordForm.value)
    alert('Response is submitted');
    this.newRecordForm.reset();
  }

  editRecord(index) {
    this.isEdit = true;
    this.editRecordValues.country = this.Value[index][0];
    this.editRecordValues.currency = this.Value[index][1];
    console.log(this.editRecordValues);
  }

  deleteRecord(index) {
    console.log(index)
    //this.dataService.deleteIndex(index);
    //this.newRecord.splice(index, 1);
  }

  
}
