import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatedbuttonComponent } from './updatedbutton.component';

describe('UpdatedbuttonComponent', () => {
  let component: UpdatedbuttonComponent;
  let fixture: ComponentFixture<UpdatedbuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdatedbuttonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatedbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
