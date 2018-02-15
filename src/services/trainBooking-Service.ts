import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import {TrainBooking} from '../app/dashboard/trainBooking-interface';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class TrainBookingService {


  constructor(private http: HttpClient) {

  }

  findBookings(): Observable<TrainBooking[]> {
    return this.http.get('/data/trainBookings.json').map(res => <TrainBooking[]>res);
  }
   findBookingByBookingNo(bookingNo: string): Observable<TrainBooking>{
    return this.http.get('/data/trainBooking.json').map(res => <TrainBooking>res);


   }


}

