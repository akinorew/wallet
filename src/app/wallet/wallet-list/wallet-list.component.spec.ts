import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { WalletListComponent } from './wallet-list.component';
import { WalletService } from '../wallet.service';

describe('WalletListComponent', () => {
    let component: WalletListComponent;
    let fixture: ComponentFixture<WalletListComponent>;
    const fakeWalletService = {
        change: {
            subscribe: (callback) => {
                callback({
                    total: 123,
                    walletRecords: [{
                        add: true,
                        date: '2018-03-17T12:04:32.486Z',
                        value: 123
                    }]
                });
            },
            unsubscribe: () => {}
        }
    };

    beforeEach(async(() => {

        TestBed.configureTestingModule({
                declarations: [WalletListComponent],
                providers: [{ provide: WalletService, useValue: fakeWalletService }]
            })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(WalletListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should subscribe for the wallet change', () => {

        expect(component.records).toEqual([{
            add: true,
            date: '2018-03-17T12:04:32.486Z',
            value: 123
        } as any]);
        expect(component.total).toEqual(123);

    });
});
