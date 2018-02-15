import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardPage} from './dashboard/dashboard.page';
import {MainLayout} from './main/main.layout';
import {AssetDetailPage} from './dashboard/asset-detail.page';
import {TestPage} from './dashboard/test.page';
import {TrainBookingDetailPage} from './dashboard/train.Booking.detail.page';
import {Todo} from './dashboard/todo-interface';
import {TodoDetailPage} from './dashboard/todo-detail.page';
import {TodoListPage} from './dashboard/todo-list.page';
import {TrainbookingHostPage} from './dashboard/trainBooking-host.page';

const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        component: DashboardPage,
      },
      {
        path: 'detail/:assetNo',
        component: AssetDetailPage,
      },
      {
        path: 'test',
        component: TestPage
      },
      {
        path: 'booking-detail/:bookingNo',
        component: TrainBookingDetailPage,
      },

      {
        path: 'todo-detail/:id',
        component: TodoDetailPage,
      },

      {
        path: 'todo-list',
        component: TodoListPage,

      },
      {
        path: 'trainbooking-host',
        component: TrainbookingHostPage,
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: false}),
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule {
}
