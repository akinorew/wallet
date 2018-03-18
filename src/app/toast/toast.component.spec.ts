import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastComponent } from './toast.component';
import { ToastService } from './toast.service';

describe('ToastComponent', () => {
    let component: ToastComponent;
    let fixture: ComponentFixture<ToastComponent>;
    const fakeToastService = {
        getAlert: () => {
            return {
                subscribe: (callback) => {
                    callback('Example toast message!');
                },
                unsubscribe: () => {}
            };
        }
    };

    beforeEach(async(() => {
        TestBed.configureTestingModule({
                declarations: [ToastComponent],
                providers: [{ provide: ToastService, useValue: fakeToastService }]
            })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ToastComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should subscribe for the wallet change', () => {

        expect(component.message).toEqual('Example toast message!');

    });

    describe('when remove toast', () => {

        it('should delete the message', () => {

            component.removeToast();
            fixture.detectChanges();
            expect(component.message).toBeUndefined();

        });

    });
});
