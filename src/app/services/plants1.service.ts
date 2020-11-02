import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

export interface Plant1 {
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
  public plant1: Observable<Plant1[]>;
  private plantCollection: AngularFirestoreCollection<Plant1>;

  constructor(private afs: AngularFirestore) {
    this.plantCollection = this.afs.collection<Plant1>('plant1');
    this.plant1 = this.plantCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
  });
      })
);
  }
getPlantsDetails(): AngularFirestoreCollection<Plant1> {
  return this.afs.collection(`plants1`);
}
getPlants(): Observable<Plant1[]> {
  return this.plant1;
}
getPlant(id: string): Observable<Plant1> {
  return this.plantCollection.doc<Plant1>(id).valueChanges().pipe(
    take(1),
    map(plant1 => {
      plant1.id = id;
      return plant1
    })
  );
}
addPlant(plant1: Plant1): Promise<DocumentReference> {
  return this.plantCollection.add(plant1);
}
}
