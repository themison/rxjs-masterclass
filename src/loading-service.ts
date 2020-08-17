import { Subject, Observable, BehaviorSubject } from "rxjs";

const loading$ = new BehaviorSubject(true);

export const loadingService = {
  showLoading: () => loading$.next(true),
  hideLoading: () => loading$.next(false),
  loadingStatus$: loading$.asObservable(),
};
