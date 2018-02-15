import {selector} from 'rxjs/operator/publish';
import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {FormBuilder, FormGroup, Validator, Validators} from '@angular/forms';
import {TrainBooking} from './trainBooking-interface';

@Component({
  selector: 'qs-trainbooking-dialog',
  templateUrl: './trainBooking.dialog.html',
})

export class TrainbookingDialog implements OnInit {

  editorForm: FormGroup;

  constructor(private dialog: MatDialogRef<TrainbookingDialog>,
              private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.editorForm = this.formBuilder.group({
      trainNo: ['', Validators.required],
      bookingNo: ['', Validators.required],
      category: ['', Validators.required],
    });
  }
  save(booking: TrainBooking): void {
    console.log(JSON.stringify(booking));
    this.dialog.close();
  }

}


