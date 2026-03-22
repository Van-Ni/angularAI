import { createAction, props } from '@ngrx/store';

export const loadJobs = createAction(
  '[Jobs] Load Jobs',
  props<{ query: any }>()
);

export const loadJobsSuccess = createAction(
  '[Jobs] Load Jobs Success',
  props<{ data: any[]; total: number }>()
);
