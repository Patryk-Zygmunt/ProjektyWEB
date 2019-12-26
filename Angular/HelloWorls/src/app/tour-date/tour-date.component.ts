import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NgbCalendar, NgbDate, NgbDateParserFormatter} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-tour-date',
  templateUrl: './tour-date.component.html',
  styleUrls: ['./tour-date.component.css']
})
export class TourDateComponent {


  @Output()
  tourDate = new EventEmitter<{start:Date,end:Date}>()

  hoveredDate: NgbDate;

  fromDate: NgbDate;
  toDate: NgbDate;
  disabled: true;

  constructor(private calendar: NgbCalendar, public formatter: NgbDateParserFormatter) {
    this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
  }

  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
      this.toDate = date;
      this.tourDate.next({start:this.NgbDateToDate(this.fromDate),end: this.NgbDateToDate(this.toDate)})
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
  }

  isHovered(date: NgbDate) {
    return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
  }

  isInside(date: NgbDate) {
    return date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return date.equals(this.fromDate) || date.equals(this.toDate) || this.isInside(date) || this.isHovered(date);
  }

  validateInput(currentValue: NgbDate, input: string): NgbDate {
    const parsed = this.formatter.parse(input);
    return parsed && this.calendar.isValid(NgbDate.from(parsed)) ? NgbDate.from(parsed) : currentValue;
  }


  NgbDateToDate(ngbDate:NgbDate):Date{
    return new Date(ngbDate.year, ngbDate.month - 1, ngbDate.day);
  }
}
