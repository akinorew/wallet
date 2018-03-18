import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ToastService {
    public subject = new Subject<string>();

    constructor() {
    }

    getAlert(): Observable<any> {
        return this.subject.asObservable();
    }

    send(message: string) {
        this.subject.next(message);
    }
}
