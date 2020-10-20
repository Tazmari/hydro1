import { Component, OnInit } from '@angular/core';
import { AngularFirestore} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { PDetails, Plants1Service } from '../services/plants1.service';



@Component({
  selector: 'app-recorddata',
  templateUrl: './recorddata.page.html',
  styleUrls: ['./recorddata.page.scss'],
})

export class RecorddataPage implements OnInit {

  pDetails: Observable<PDetails[]>;
  pDetailsKey: string;

  constructor(public plantsService: Plants1Service, public afs: AngularFirestore) {
  }
  ngOnInit() {
    this.pDetails = this.plantsService.getPlantsDetails().valueChanges();
    console.log(this.pDetails);

  }
  getdets(){
    this.afs.collection('plants1').doc<PDetails>(this.pDetailsKey).valueChanges().subscribe(data  => {
    });

  }
}
