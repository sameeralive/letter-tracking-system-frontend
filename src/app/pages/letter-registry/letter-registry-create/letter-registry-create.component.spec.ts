import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterRegistryCreateComponent } from './letter-registry-create.component';

describe('LetterRegistryCreateComponent', () => {
  let component: LetterRegistryCreateComponent;
  let fixture: ComponentFixture<LetterRegistryCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LetterRegistryCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LetterRegistryCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
