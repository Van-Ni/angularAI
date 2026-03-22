import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-job-filters',
  standalone: true,
  template: `
    <input [formControl]="search" placeholder="Search jobs..." />
  `
})
export class JobFiltersComponent {
  @Output() searchChange = new EventEmitter<string>();

  search = new FormControl('');

  constructor() {
    this.search.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe(value => {
      this.searchChange.emit(value || '');
    });
  }
}
