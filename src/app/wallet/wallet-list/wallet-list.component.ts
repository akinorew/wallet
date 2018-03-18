import { Component, OnInit } from '@angular/core';
import { Record, WalletService } from '../wallet.service';

@Component({
    selector: 'app-wallet-list',
    templateUrl: './wallet-list.component.html',
    styleUrls: ['./wallet-list.component.scss']
})
export class WalletListComponent implements OnInit {
    records: Record[];
    total: number;

    constructor(private walletService: WalletService) {
    }

    ngOnInit() {
        this.records = this.walletService.walletRecords;
        this.total = this.walletService.total;

        this.walletService.change.subscribe(wallet => {
            this.records = wallet.walletRecords;
            this.total = wallet.total;
        });
    }

}
