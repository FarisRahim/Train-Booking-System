import {Component, OnInit} from '@angular/core';
import {TrainBooking} from './trainBooking-interface';
import {TrainBookingService} from '../../services/trainBooking-Service';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';

@Component({
  selector:'qs-trainBooking-detail',
  templateUrl:'./train.Booking.detail.page.html',
})
export class TrainBookingDetailPage implements OnInit {

  trainBooking$: Observable<TrainBooking>;

  constructor (private trainbookingService: TrainBookingService,
               private route: ActivatedRoute,
               private router: Router
  ) {

  }
  ngOnInit(): void {
    this.route.params.subscribe((params:{bookingNo: string}) => {
      this.trainBooking$ = this.trainbookingService.findBookingByBookingNo(params.bookingNo);
    });
  }

  goBack():void {
    this.router.navigate(['/dashboard']);
  }
}

