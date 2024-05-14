import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterRegistryListComponent } from './letter-registry-list.component';

describe('LetterRegistryListComponent', () => {
  let component: LetterRegistryListComponent;
  let fixture: ComponentFixture<LetterRegistryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LetterRegistryListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LetterRegistryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
