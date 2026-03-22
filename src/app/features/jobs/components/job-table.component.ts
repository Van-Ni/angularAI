import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-job-table',
  standalone: true,
  template: `
    <div *ngFor="let job of jobs; trackBy: trackById">
      {{ job.name }} - {{ job.status }}
    </div>
  `
})
export class JobTableComponent {
  @Input() jobs: any[] = [];

  trackById(index: number, item: any) {
    return item.id;
  }
}
