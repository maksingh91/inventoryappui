import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsocketProdutcsComponent } from './websocket-produtcs.component';

describe('WebsocketProdutcsComponent', () => {
  let component: WebsocketProdutcsComponent;
  let fixture: ComponentFixture<WebsocketProdutcsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebsocketProdutcsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebsocketProdutcsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
