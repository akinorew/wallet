import { EventEmitter, Injectable, Output } from '@angular/core';

export interface Record {
    add: boolean;
    date: Date;
    value: number;
}

@Injectable()
export class WalletService {

    total = 0;
    walletRecords: Record[];

    @Output() change: EventEmitter<any> = new EventEmitter();

    constructor() {
        this.getRecords();
    }

    calculateTotal(walletRecords: Record[]) {
        walletRecords.forEach(record => {
            this.total = record.add ? this.total + record.value : this.total - record.value;
        });
    }

    getRecords() {
        this.walletRecords = JSON.parse(localStorage.getItem('wallet-records')) || [];
        this.calculateTotal(this.walletRecords);
    }

    insertRecord(record: Record) {
        this.total = record.add ? this.total + record.value : this.total - record.value;
        this.walletRecords.push(record);
        this.change.emit(this);
        localStorage.setItem('wallet-records', JSON.stringify(this.walletRecords));
    }

    reset() {
        this.total = 0;
        this.walletRecords = [];
        localStorage.removeItem('wallet-records');
        this.change.emit(this);
    }
}
