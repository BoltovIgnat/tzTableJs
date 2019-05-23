import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablesItemComponent } from './tables-item.component';

describe('TablesItemComponent', () => {
  let component: TablesItemComponent;
  let fixture: ComponentFixture<TablesItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablesItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
