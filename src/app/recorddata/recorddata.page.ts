import { Component, OnInit } from '@angular/core';
import { AngularFirestore} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Plant1, Plants1Service } from '../services/plants1.service';



@Component({
  selector: 'app-recorddata',
  templateUrl: './recorddata.page.html',
  styleUrls: ['./recorddata.page.scss'],
})

export class RecorddataPage implements OnInit {

  plant1: Observable<Plant1[]>;
  pDetailsKey: string;

  constructor(public plantsService: Plants1Service, public afs: AngularFirestore) {
  }
  ngOnInit() {
    this.plant1 = this.plantsService.getPlantsDetails().valueChanges();
    console.log(this.plant1);

  }
  getdets(){
    this.afs.collection('plants1').doc<Plant1>(this.pDetailsKey).valueChanges().subscribe(data  => {
    });

  }
}
