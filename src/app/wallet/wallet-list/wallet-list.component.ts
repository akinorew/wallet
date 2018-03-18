import { Component, OnDestroy, OnInit } from '@angular/core';
import { Record, WalletService } from '../wallet.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'app-wallet-list',
    templateUrl: './wallet-list.component.html',
    styleUrls: ['./wallet-list.component.scss']
})
export class WalletListComponent implements OnInit, OnDestroy {
    records: Record[];
    total: number;
    private subscription: Subscription;

    constructor(private walletService: WalletService) {
    }

    ngOnInit() {
        this.records = this.walletService.walletRecords;
        this.total = this.walletService.total;

        this.subscription = this.walletService.change.subscribe(wallet => {
            this.records = wallet.walletRecords;
            this.total = wallet.total;
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}
