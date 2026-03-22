import { createReducer, on } from '@ngrx/store';
import { loadJobsSuccess } from './actions';

export interface JobState {
  jobs: any[];
  total: number;
}

export const initialState: JobState = {
  jobs: [],
  total: 0
};

export const jobReducer = createReducer(
  initialState,
  on(loadJobsSuccess, (state, { data, total }) => ({
    ...state,
    jobs: data,
    total
  }))
);
