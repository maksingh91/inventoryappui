import { Component, OnInit } from '@angular/core';
import { SseServiceService } from '../sse-service.service';


@Component({
  selector: 'app-websocket-produtcs',
  templateUrl: './websocket-produtcs.component.html',
  styleUrls: ['./websocket-produtcs.component.css']
})
export class WebsocketProdutcsComponent implements OnInit {

  messages: any[]=[];

  constructor(private sseService: SseServiceService) {}
  
  ngOnInit() {
    this.sseService
      .getServerSentEvent("http://localhost:8085/inventory/getfluxproduct")
      .subscribe({
        next: data => {
          console.log(data);
          console.log(data.data);
          this.addMessage(data.data);
        },
        error: err => console.error(err)
      });
  }

  addMessage(msg: any) {
    this.messages = this.messages.concat(msg);
    console.log("messages appended ::" + this.messages);
  }

}
