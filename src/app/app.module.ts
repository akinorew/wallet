import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { WalletComponent } from './wallet/wallet/wallet.component';

const appRoutes: Routes = [
    {
        path: 'home',
        component: WalletComponent,
        data: {
            title: 'Wallet'
        }
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponentComponent,
        WalletComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(
            appRoutes,
            {enableTracing: true}
        )
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
