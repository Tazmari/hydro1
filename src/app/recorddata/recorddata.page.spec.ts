import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecorddataPage } from './recorddata.page';

describe('RecorddataPage', () => {
  let component: RecorddataPage;
  let fixture: ComponentFixture<RecorddataPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecorddataPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecorddataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
