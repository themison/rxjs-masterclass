import { Subject, interval, BehaviorSubject, ReplaySubject, fromEvent, AsyncSubject } from "rxjs";
import { ajax } from "rxjs/ajax";
import { tap, multicast, refCount, share, exhaustMap, mergeMapTo, shareReplay } from "rxjs/operators";
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

// const store = new ObservableStore({
//   user: "Brian",
//   isAuth: "false",
// });

// store.selectState("user").subscribe(console.log);

// store.selectState("isAuth").subscribe(console.log);

// store.updateState({ user: "Ilya" });

// store.updateState({ isAuth: "true" });

// const subject = new ReplaySubject(1);

// subject.subscribe(observer);

// subject.next(123);

// subject.next(555);

// subject.subscribe(observer);

// const ajaxCall = () => ajax.getJSON("https://api.github.com/users/themison");

// const click$ = fromEvent(document, "click");
// const clickRequest$ = click$.pipe(
//   exhaustMap(() => ajaxCall()),
//   shareReplay(1, 2000),
// );

// clickRequest$.subscribe(observer);
// clickRequest$.subscribe(observer);

// setTimeout(() => clickRequest$.subscribe(observer), 5000);

// const subject = new AsyncSubject();

// subject.subscribe(observer);

// subject.next(123);

// subject.next(555);

// subject.complete();
