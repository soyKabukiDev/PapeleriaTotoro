import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {
  private updateSubject = new Subject<void>();

  getUpdateObservable() {
    return this.updateSubject.asObservable();
  }

  triggerUpdate() {
    this.updateSubject.next();
  }
}
