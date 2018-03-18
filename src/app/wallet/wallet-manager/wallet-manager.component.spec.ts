import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletManagerComponent } from './wallet-manager.component';
import { WalletService } from '../wallet.service';
import { FormsModule } from '@angular/forms';
import { ToastService } from '../../toast/toast.service';

describe('WalletManagerComponent', () => {
    let component: WalletManagerComponent;
    let fixture: ComponentFixture<WalletManagerComponent>;
    const fakeWalletService: WalletService = new WalletService;
    const fakeToastService: ToastService = new ToastService;

    beforeEach(async(() => {

        fakeWalletService.insertRecord = jasmine.createSpy('fake insertRecord()');
        fakeToastService.send = jasmine.createSpy('fake send()');

        TestBed.configureTestingModule({
                declarations: [WalletManagerComponent],
                imports: [FormsModule],
                providers: [{ provide: WalletService, useValue: fakeWalletService }, { provide: ToastService, useValue: fakeToastService }]
            })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(WalletManagerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('when insert amount', () => {

        it('insert record', () => {

            component.insertAmount({
                value: '23'
            });

            fixture.detectChanges();

            expect(fakeWalletService.insertRecord).toHaveBeenCalledWith({
                add: true,
                date: jasmine.any(Date),
                value: 23
            });

        });

        describe('when total amount is less than 0', () => {

            it('should display toast message', () => {

                fakeWalletService.total = 0;
                component.walletAdd = false;
                component.insertAmount({
                    value: '34'
                });

                fixture.detectChanges();

                expect(fakeToastService.send).toHaveBeenCalledWith('Wallet value cannot be less than 0!');


            });

        });

        describe('when total amount is less than removed value', () => {

            it('should display toast message', () => {

                component.insertAmount({
                    value: '23'
                });
                component.walletAdd = false;
                component.insertAmount({
                    value: '34'
                });

                fixture.detectChanges();

                expect(fakeToastService.send).toHaveBeenCalledWith('Wallet value cannot be less than 0!');


            });

        });

    });

    describe('when toggle value', () => {

        it('should switch between add and remove value', () => {

            expect(component.walletAdd).toEqual(true);

            component.toggleValue();

            fixture.detectChanges();

            expect(component.walletAdd).toEqual(false);

        });

    });
});
