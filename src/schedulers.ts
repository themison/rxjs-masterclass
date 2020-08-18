import { asyncScheduler, of, asapScheduler, animationFrameScheduler, interval, queueScheduler } from "rxjs";
import { observeOn, tap, subscribeOn, takeWhile, first } from "rxjs/operators";

const observer = {
  next: (value: any) => console.log("next", value),
  error: (error: any) => console.log("error", error),
  complete: () => console.log("complete!"),
};

/* work delay? state? */
// const sub = asyncScheduler.schedule(value => console.log(value), 2000, "Hello world!");
// sub.unsubscribe();

// of(4, 5, 6, asyncScheduler).subscribe(observer);
// of(4, 5, 6)
//   .pipe(
//     tap(() => console.log("from-tab")),
//     subscribeOn(asapScheduler, 3000),
//   )
//   .subscribe(observer);
// of(1, 2, 3).subscribe(observer);

// asapScheduler.schedule(() => {
//   console.log("asapScheduler");
// });
// queueMicrotask(() => console.log("microtask"));
// Promise.resolve("from promise").then(console.log);

// console.log("sync");

const ball = document.getElementById("ball");

// animationFrameScheduler.schedule(
//   function (position) {
//     ball.style.transform = `translate3d(0, ${position}px, 0)`;
//     if (position <= 300) {
//       this.schedule(position + 1);
//     }
//   },
//   0,
//   0,
// );

// interval(0, animationFrameScheduler)
//   .pipe(takeWhile(val => val < 300))
//   .subscribe(val => {
//     return (ball.style.transform = `translate3d(0, ${val}px, 0)`);
//   });

// queueScheduler.schedule(() => {
//   console.log(123);
// });
// console.log("312321");
