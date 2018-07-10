import { Component, OnInit, Input, ViewEncapsulation, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ModalComponent implements OnInit {
  @Input() modalOpen = false;
  @Output() isModalOpen = new EventEmitter<boolean>();
  @Input() modalHeader = 'Modal Header';
  modalToggle = 'show';
  constructor(private el: ElementRef) { }

  ngOnInit() {
  }

  closeModal() {
    this.isModalOpen.next(false);
  }
}
