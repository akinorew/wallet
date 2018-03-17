import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { WalletComponent } from './wallet/wallet/wallet.component';
import { WalletManagerComponent } from './wallet/wallet/wallet-manager/wallet-manager/wallet-manager.component';
import { WalletService } from './wallet/wallet/wallet.service';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
    {
        path: 'home',
        component: WalletComponent,
        data: {
            title: 'Wallet'
        }
    }
];

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponentComponent,
        WalletComponent,
        WalletManagerComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(
            appRoutes,
            // {enableTracing: true}
        )
    ],
    providers: [WalletService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
