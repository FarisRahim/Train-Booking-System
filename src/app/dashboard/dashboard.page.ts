import {AfterViewInit, Component, OnDestroy, OnInit, ViewContainerRef} from '@angular/core';
import { Asset } from './asset.interface';
import { Observable } from 'rxjs/Observable';
import { AssetService } from '../../services/asset.service';
import { ActivatedRoute, Router } from '@angular/router';
import {MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material';
import {AssetCreatorDialog} from './asset-creator.dialog';
import {TrainBookingService} from '../../services/trainBooking-Service';
import {TrainBooking} from './trainBooking-interface';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TrainbookingDialog} from './trainBooking.dialog';

@Component({
  selector: 'qs-dashboard',
  templateUrl: './dashboard.page.html',
})
export class DashboardPage implements OnInit, OnDestroy, AfterViewInit {
  ngOnDestroy(): void {console.log("hmmm")
  }

  ngAfterViewInit(): void {
  }
  assets$: Observable<Asset[]>;
  bookings$: Observable<TrainBooking[]>;
  creatorDialogRef: MatDialogRef<TrainbookingDialog>;
  editorForm: FormGroup;

  // constructor
  constructor(private assetService: AssetService,
              private trainBooking: TrainBookingService,
              private router: Router,
              private route: ActivatedRoute,
              private vcf: ViewContainerRef,
              private dialog: MatDialog,
              private formBuilder: FormBuilder
  ) {
  }

  loadPosts(): void {
    this.assets$ = this.assetService.findAssets();
    this.assets$.subscribe(albums=>console.log(albums));
    this.bookings$ = this.trainBooking.findBookings();
  }

  viewBooking(trainBooking: TrainBooking): void {
    console.log(JSON.stringify(trainBooking));
    this.router.navigate(['/booking-detail', trainBooking.bookingNo]);
  }


  ngOnInit(): void {
    this.loadPosts();
    this.editorForm = this.formBuilder.group({
      name:['',Validators.required],
      icNo:['',Validators.required]
    })
  }



  showAddDialog(): void {
    console.log('showContainerDialog');
    let config: MatDialogConfig = new MatDialogConfig();
    config.viewContainerRef = this.vcf;
    config.role = 'dialog';
    config.width = '70%';
    config.height = '60%';
    config.position = {top: '0px'};
    this.creatorDialogRef = this.dialog.open(TrainbookingDialog, config);
    this.creatorDialogRef.afterClosed().subscribe((res) => {
      console.log('close dialog');
    });
  }
}
