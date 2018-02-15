import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from './app.component';
import {SharedModule} from './shared/shared.module';
import {AppRoutingModule} from './app.routes';
import {HttpClientModule} from '@angular/common/http';
import {MainLayout} from './main/main.layout';
import {AssetService} from '../services/asset.service';
import {AssetDetailPage} from './dashboard/asset-detail.page';
import {DashboardPage} from './dashboard/dashboard.page';
import {AssetCreatorDialog} from './dashboard/asset-creator.dialog';
import {TrainBookingService} from '../services/trainBooking-Service';
import {TestPage} from './dashboard/test.page';
import {TrainBookingDetailPage} from './dashboard/train.Booking.detail.page';
import {TodoService} from '../services/todo-Service';
import {TodoListPage} from './dashboard/todo-list.page';
import {TodoDetailPage} from './dashboard/todo-detail.page';
import {TrainbookingDialog} from './dashboard/trainBooking.dialog';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireModule} from 'angularfire2';
import {environment} from '../environments/environment';
import {AlbumService} from '../services/albums.service';
import {TrainbookingHostPage} from './dashboard/trainBooking-host.page';
import {TrainBookingCategoryPipe} from './dashboard/trainBooking-category.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DashboardPage,
    AssetDetailPage,
    AssetCreatorDialog,
    MainLayout,
    TestPage,
    TrainBookingDetailPage,
    TodoListPage,
    TodoDetailPage,
    TrainbookingDialog,
    TrainbookingHostPage,
    TrainBookingCategoryPipe,


  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
    AngularFireModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,

  ],
  providers: [TrainBookingService, AssetService, TodoService, AlbumService],
  entryComponents: [AssetCreatorDialog,TrainbookingDialog],
  bootstrap: [AppComponent],
})
export class AppModule {
}
