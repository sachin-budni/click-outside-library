import { Directive, ElementRef, EventEmitter, HostListener, Output } from "@angular/core";

@Directive({
    selector: '[clickOutside]'
})
export class ClickOutsideDirective {
    @Output() clickOutside = new EventEmitter<void>();
    constructor(private element: ElementRef) {
    }

    @HostListener('document:click', ['$event'])
    public onClick(event: MouseEvent): void {
        let targetElement = event.target as HTMLElement;
        const clickedInside = this.element.nativeElement.contains(targetElement);
        if (!clickedInside) {
            // this.element.nativeElement.dispatchEvent(new CustomEvent('clickOutsideEvent'));
            this.clickOutside.emit();
        }
    }

}