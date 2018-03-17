import { Component, OnInit } from '@angular/core';
import { WalletService } from '../../wallet.service';

@Component({
    selector: 'app-wallet-manager',
    templateUrl: './wallet-manager.component.html',
    styleUrls: ['./wallet-manager.component.scss']
})
export class WalletManagerComponent implements OnInit {

    walletAdd = true;

    constructor(private walletService: WalletService) {
    }

    ngOnInit() {
    }

    insertAmount(event) {
        if (event.value) {
            this.walletService.insertRecord({
                add: this.walletAdd,
                date: new Date(),
                value: parseFloat(event.value)
            });
        }
    }

    toggleValue() {
        this.walletAdd = !this.walletAdd;
    }

}
