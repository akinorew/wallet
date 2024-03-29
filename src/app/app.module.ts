import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { WalletComponent } from './wallet/wallet.component';
import { WalletManagerComponent } from './wallet/wallet-manager/wallet-manager.component';
import { WalletService } from './wallet/wallet.service';
import { FormsModule } from '@angular/forms';
import { WalletListComponent } from './wallet/wallet-list/wallet-list.component';
import { ToastComponent } from './toast/toast.component';
import { ToastService } from './toast/toast.service';

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
        AppHeaderComponent,
        WalletComponent,
        WalletListComponent,
        WalletManagerComponent,
        ToastComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(
            appRoutes,
            // {enableTracing: true}
        )
    ],
    providers: [WalletService, ToastService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
