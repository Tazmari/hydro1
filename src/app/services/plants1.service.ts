import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface PDetails {
  id: string;
  name: string;
  PHHigh: number;
  PHLow: number;
  CFHigh: number;
  CFLow: number;

}
@Injectable({
  providedIn: 'root'
})
export class Plants1Service {
  public PDetails: Observable<PDetails[]>;
  constructor(private afs: AngularFirestore) { }

getPlantsDesc()
{}

getPlantsDetails(): AngularFirestoreCollection<PDetails> {
  return this.afs.collection(`plants1`);
}
}
