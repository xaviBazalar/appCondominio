import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SalaUsoMultiplePage } from './sala-uso-multiple.page';

describe('SalaUsoMultiplePage', () => {
  let component: SalaUsoMultiplePage;
  let fixture: ComponentFixture<SalaUsoMultiplePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SalaUsoMultiplePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SalaUsoMultiplePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
