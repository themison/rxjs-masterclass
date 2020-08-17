import { Subject, interval, BehaviorSubject } from "rxjs";
import { tap, multicast, refCount, share } from "rxjs/operators";
import { loadingService } from "./loading-service";
import { ObservableStore } from "./store";

const observer = {
  next: (value: any) => console.log("next", value),
  error: (error: any) => console.log("error", error),
  complete: () => console.log("complete!"),
};

// const subscription = subject$.subscribe(observer);

// const subscriptionTwo = subject$.subscribe(observer);

// const interval$ = interval(2000).pipe(tap(value => console.log("new interval", value)));

// const multicatedInterval$ = interval$.pipe(
// multicast(() => new Subject()),
// refCount(),
//   share(),
// );

// const subOne = multicatedInterval$.subscribe(observer);
// const subTwo = multicatedInterval$.subscribe(observer);

// const loadingOverlay = document.getElementById("loading-overlay");

// loadingService.loadingStatus$.subscribe(isLoading => {
//   if (isLoading) {
//     loadingOverlay.classList.add("open");
//   } else {
//     loadingOverlay.classList.remove("open");
//   }
// });

// setTimeout(() => loadingService.hideLoading(), 3000);

// const subject = new BehaviorSubject("Hello");

// const subscription = subject.subscribe(observer);

// const secondSubscription = subject.subscribe(observer);
// subject.next("World");

// setTimeout(() => {
//   subject.subscribe(observer);
// }, 3000);

const store = new ObservableStore({
  user: "Brian",
  isAuth: "false",
});

store.selectState("user").subscribe(console.log);
