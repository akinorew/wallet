import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletComponent } from './wallet.component';
import { WalletManagerComponent } from './wallet-manager/wallet-manager.component';
import { WalletService } from './wallet.service';

describe('WalletComponent', () => {
    let component: WalletComponent;
    let fixture: ComponentFixture<WalletComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
                declarations: [WalletComponent, WalletManagerComponent],
                providers: [WalletService]
            })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(WalletComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
