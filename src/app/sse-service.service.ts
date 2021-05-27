import { Injectable, NgZone } from "@angular/core";
import { Observable, Observer } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SseServiceService {

  constructor(private _zone: NgZone) {}

  getServerSentEvent(url: string): Observable<any> {
    return new Observable((observer: any) => {
      const eventSource = this.getEventSource(url);
      eventSource.onmessage = event => {
        console.log(event.data);
        this._zone.run(() => {
          observer.next(event);
        });
      };
      eventSource.onerror = error => {
        this._zone.run(() => {
          observer.error(error);
        });
      };
    });
  }
  private getEventSource(url: string): EventSource {
    return new EventSource(url);
  }
}
