import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletComponent } from './wallet.component';
import { WalletManagerComponent } from './wallet-manager/wallet-manager.component';
import { WalletService } from './wallet.service';
import { WalletListComponent } from './wallet-list/wallet-list.component';
import { FormsModule } from '@angular/forms';
import { ToastService } from '../toast/toast.service';

describe('WalletComponent', () => {
    let component: WalletComponent;
    let fixture: ComponentFixture<WalletComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
                declarations: [WalletComponent, WalletListComponent, WalletManagerComponent],
                imports: [FormsModule],
                providers: [WalletService, ToastService]
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
