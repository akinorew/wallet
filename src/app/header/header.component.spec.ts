import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppHeaderComponent } from './header.component';
import { WalletService } from '../wallet/wallet.service';

describe('AppHeaderComponent', () => {
    let component: AppHeaderComponent;
    let fixture: ComponentFixture<AppHeaderComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
                declarations: [AppHeaderComponent],
                providers: [WalletService]
            })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AppHeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
