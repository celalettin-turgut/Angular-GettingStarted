import { Component, Input, OnInit, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css'],
})
export class StarComponent implements OnInit, OnChanges {
  @Input() rating: number = 0;
  cropWidth: number = 75;
  @Output() notify: EventEmitter<string> = new EventEmitter<string>()

  onClick(){
      console.log('clicked')
      this.notify.emit(`emitted value ${this.rating}`)
  }

ngOnInit(): void {
    console.log('rating',this.rating)
}

ngOnChanges(changes: SimpleChanges): void {
    this.cropWidth = this.rating* 75/5;
}
}
