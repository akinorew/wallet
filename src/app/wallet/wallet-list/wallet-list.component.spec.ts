import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { WalletListComponent } from './wallet-list.component';
import { WalletService } from '../wallet.service';

describe('WalletListComponent', () => {
    let component: WalletListComponent;
    let fixture: ComponentFixture<WalletListComponent>;

    beforeEach(async(() => {

        TestBed.configureTestingModule({
                declarations: [WalletListComponent],
                providers: [WalletService]
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
});
