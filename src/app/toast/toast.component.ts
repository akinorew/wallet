import { Component, OnInit } from '@angular/core';
import { ToastService } from './toast.service';

@Component({
    selector: 'app-toast-component',
    templateUrl: './toast.component.html',
    styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit {

    message: string;

    constructor(private toastService: ToastService) { }

    ngOnInit() {
        this.toastService.getAlert().subscribe((message: string) => {
            this.message = message;
        });
    }

    removeToast() {
        delete this.message;
    }
}
