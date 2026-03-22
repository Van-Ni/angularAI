import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loadJobs, loadJobsSuccess } from './actions';
import { switchMap, map, debounceTime, catchError } from 'rxjs/operators';
import { JobService } from '../services/job.service';
import { of } from 'rxjs';

@Injectable()
export class JobEffects {
  constructor(private actions$: Actions, private jobService: JobService) {}

  loadJobs$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadJobs),
      debounceTime(300),
      switchMap(({ query }) =>
        this.jobService.getJobs(query).pipe(
          map(res => loadJobsSuccess(res)),
          catchError(() => of({ type: '[Jobs] Load Jobs Fail' }))
        )
      )
    )
  );
}
