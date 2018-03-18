import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletManagerComponent } from './wallet-manager.component';
import { WalletService } from '../wallet.service';
import { FormsModule } from '@angular/forms';

describe('WalletManagerComponent', () => {
    let component: WalletManagerComponent;
    let fixture: ComponentFixture<WalletManagerComponent>;
    const fakeWalletService: WalletService = new WalletService;

    beforeEach(async(() => {

        fakeWalletService.insertRecord = jasmine.createSpy('fake insertRecord()');

        TestBed.configureTestingModule({
                declarations: [WalletManagerComponent],
                imports: [FormsModule],
                providers: [{ provide: WalletService, useValue: fakeWalletService }]
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
