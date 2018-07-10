import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[modalCloseEvent]'
})
export class ModalToggleDirective {
    constructor(private el: ElementRef) { }

    @HostListener('click', ['$event'])
    onToggle($event: any) {
        $event.preventDefault();
        this.el.nativeElement.parentElement.parentElement.classList.toggle('show');
    }
}
