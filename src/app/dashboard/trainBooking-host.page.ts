import {TrainBookingService} from '../../services/trainBooking-Service';
import {TrainbookingDialog} from './trainBooking.dialog';
import {MatDialog, MatDialogRef} from '@angular/material';
import {Component} from '@angular/core';


@Component({
  selector:'qs-trainbooking-host',
  templateUrl: './trainBooking-host.page.html',
  }

)
export class TrainbookingHostPage{
  creatorDialogRef: MatDialogRef<TrainbookingDialog>;

// direct inject constructor
  constructor(private trainbookingService: TrainBookingService,
              private dialog: MatDialog) {
  }

  showAddDialog(): void {
    this.creatorDialogRef = this.dialog.open(TrainbookingDialog);
  }


}



