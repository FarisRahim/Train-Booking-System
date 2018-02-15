import {Journey} from './trainBooking-journey';
import {Schedule} from './trainBooking-schedule';
import {Category} from './trainBooking-category.enum';
export interface TrainBooking {
  schedules : Schedule[];
  price: number;
  journey: Journey;
  category: Category;
  trainNo: number;
  quantity: number;
  bookingNo: string;
}
