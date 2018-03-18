import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppHeaderComponent } from './header.component';
import { WalletService } from '../wallet/wallet.service';

describe('AppHeaderComponent', () => {
    let component: AppHeaderComponent;
    let fixture: ComponentFixture<AppHeaderComponent>;
    const fakeWalletService: WalletService = new WalletService;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
                declarations: [AppHeaderComponent],
                providers: [{ provide: WalletService, useValue: fakeWalletService }]
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

    describe('when reset', () => {

        it('should reset the wallet', () => {

            fakeWalletService.reset = jasmine.createSpy('fake reset()');

            component.reset();

            fixture.detectChanges();

            expect(fakeWalletService.reset).toHaveBeenCalled();

        });

    });
});
