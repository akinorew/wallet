import { WalletService } from './wallet.service';

describe('Wallet Service', () => {

    let walletService: WalletService;

    beforeEach(() => {

        spyOn(localStorage, 'setItem');

    });

    describe('when initialized', () => {

        it('should get all wallet records', () => {

            walletService = new WalletService();

            expect(walletService.walletRecords).toEqual([]);

            spyOn(localStorage, 'getItem').and.callFake((key) => {
                if (key === 'wallet-records') {
                    return '[{"add":true,"date":"2018-03-17T12:04:25.172Z","value":12},{"add":false,"date":"2018-03-17T12:04:32.486Z","value":2}]';
                }
            });

            walletService = new WalletService();

            expect(walletService.walletRecords).toEqual([{
                add: true,
                date: '2018-03-17T12:04:25.172Z',
                value: 12
            } as any, {
                'add': false,
                'date': '2018-03-17T12:04:32.486Z',
                'value': 2
            } as any]);

        });

        it('should calculate total amount', () => {

            walletService = new WalletService();

            expect(walletService.total).toEqual(0);

            spyOn(localStorage, 'getItem').and.callFake((key) => {
                if (key === 'wallet-records') {
                    return '[{"add":true,"date":"2018-03-17T12:04:32.486Z","value":123},{"add":false,"date":"2018-03-17T12:04:25.172Z","value":24}]';
                }
            });

            walletService = new WalletService();

            expect(walletService.total).toEqual(99);

        });

    });

    describe('when insert record', () => {

        beforeEach(() => {

            spyOn(localStorage, 'getItem').and.callFake((key) => {
                if (key === 'wallet-records') {
                    return '[{"add":true,"date":"2018-03-17T12:04:32.486Z","value":123},{"add":false,"date":"2018-03-17T12:04:25.172Z","value":24}]';
                }
            });

            walletService = new WalletService();

        });

        it('should update total value', () => {

            walletService.insertRecord({
                add: true,
                date: new Date(),
                value: 23
            });

            expect(walletService.total).toEqual(122);

        });

        it('should add record to the wallet records', () => {

            walletService.insertRecord({
                add: true,
                date: new Date(),
                value: 23
            });

            expect(walletService.walletRecords).toEqual([{
                add: true,
                date: '2018-03-17T12:04:32.486Z',
                value: 123
            } as any, {
                'add': false,
                'date': '2018-03-17T12:04:25.172Z',
                'value': 24
            } as any, {
                add: true,
                date: jasmine.any(Date),
                value: 23
            }]);

        });

        it('should save the record in local storage', () => {

            walletService.insertRecord({
                add: true,
                date: new Date('03.12.2018'),
                value: 23
            });

            expect(localStorage.setItem).toHaveBeenCalledWith('wallet-records', '[{"add":true,"date":"2018-03-17T12:04:32.486Z","value":123},{"add":false,"date":"2018-03-17T12:04:25.172Z","value":24},{"add":true,"date":"2018-03-11T23:00:00.000Z","value":23}]');

        });

    });

    describe('when reset', () => {

        beforeEach(() => {

            spyOn(localStorage, 'removeItem');

            walletService = new WalletService();

        });

        it('should remove wallet records from the local storage', () => {

            walletService.reset();

            expect(localStorage.removeItem).toHaveBeenCalledWith('wallet-records');

        });

        it('should cleanup the data', () => {

            walletService.insertRecord({
                add: true,
                date: new Date('12.03.2018'),
                value: 1
            });

            expect(walletService.total).toEqual(1);
            expect(walletService.walletRecords).toEqual([{
                add: true,
                date: new Date('12.03.2018'),
                value: 1
            } as any]);

            walletService.reset();

            expect(walletService.total).toEqual(0);
            expect(walletService.walletRecords).toEqual([]);

        });

    });

});
