import { Component, OnInit } from '@angular/core';
import { WalletService } from '../wallet.service';
import { ToastService } from '../../toast/toast.service';

@Component({
    selector: 'app-wallet-manager',
    templateUrl: './wallet-manager.component.html',
    styleUrls: ['./wallet-manager.component.scss']
})
export class WalletManagerComponent implements OnInit {

    walletAdd = true;

    constructor(private walletService: WalletService,
                private toastService: ToastService) {
    }

    ngOnInit() {
    }

    insertAmount(event) {
        const value = parseFloat(event.value);

        if (this.walletService.total < 0 || !this.walletAdd && this.walletService.total - value < 0) {
            this.toastService.send('Wallet value cannot be less than 0!');
        } else {
            this.walletService.insertRecord({
                add: this.walletAdd,
                date: new Date(),
                value: value
            });
        }
    }

    toggleValue() {
        this.walletAdd = !this.walletAdd;
    }

}
