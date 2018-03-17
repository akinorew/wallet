import { Component, OnInit } from '@angular/core';
import { WalletService } from '../wallet/wallet.service';

@Component({
    selector: 'app-header-component',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class AppHeaderComponent implements OnInit {
    constructor(private walletService: WalletService) {
    }

    ngOnInit() {
    }

    reset() {
        this.walletService.reset();
    }
}
