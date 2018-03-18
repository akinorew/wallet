import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './header/header.component';
import { RouterTestingModule } from '@angular/router/testing';
import { WalletService } from './wallet/wallet.service';
import { ToastComponent } from './toast/toast.component';
import { ToastService } from './toast/toast.service';

describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent,
                AppHeaderComponent,
                ToastComponent
            ],
            imports: [RouterTestingModule],
            providers: [WalletService, ToastService]
        }).compileComponents();
    }));
    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
});
