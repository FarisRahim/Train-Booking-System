import {Pipe, PipeTransform} from '@angular/core';
import {Category} from './trainBooking-category.enum';
import {Schedule} from './trainBooking-schedule';

@Pipe({name: 'trainBookingCategoryPipe'})
export class TrainBookingCategoryPipe implements PipeTransform{
  transform(value:Category ): any{
    if (!value){
      return value;
    }
    switch (Category[value.toString()]){
      case Category.ADULT: {
        return 'DEWASA';
        }
      case Category.CHILD: {
        return 'KANAK-KANAK';
        }
      case Category.ELDERLY: {
          return 'WARGA EMAS';
        }
      case Category.HANDICAP: {
        return 'KURANG UPAYA';
      }
      default: {
        return value ;
      }
    }
  }


}
