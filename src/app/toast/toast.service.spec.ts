import { ToastService } from './toast.service';

describe('Toast Service', () => {

    let toastService: ToastService;

    describe('when get alert', () => {

        it('should return the subject as observable', () => {

            toastService = new ToastService();

            expect(toastService.getAlert()).toBeDefined();

        });

    });

    describe('when send', () => {

        it('should send the message to the alert', () => {

            spyOn(toastService.subject, 'next');

            toastService.send('Example message');

            expect(toastService.subject.next).toHaveBeenCalledWith('Example message');

        });

    });

});
