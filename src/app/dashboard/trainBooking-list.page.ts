
import {selector} from 'rxjs/operator/publish';
import {TrainBookingService} from '../../services/trainBooking-Service';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'qs-trainbooking-list',
  templateUrl: './trainbooking-list.page.html',
})
  export class TrainbookingListPage implements OnInit {

  constructor (private trainBookingService: TrainBookingService){
    }
    ngOnInit(): void {
    }
}
