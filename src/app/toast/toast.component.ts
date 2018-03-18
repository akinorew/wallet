import { Component, OnDestroy, OnInit } from '@angular/core';
import { ToastService } from './toast.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'app-toast-component',
    templateUrl: './toast.component.html',
    styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit, OnDestroy {

    message: string;
    private subscription: Subscription;

    constructor(private toastService: ToastService) { }

    ngOnInit() {
        this.subscription = this.toastService.getAlert().subscribe((message: string) => {
            this.message = message;
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    removeToast() {
        delete this.message;
    }
}
