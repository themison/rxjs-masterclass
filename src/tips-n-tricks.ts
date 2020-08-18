import { throwError } from "rxjs";
import { take, finalize } from "rxjs/operators";

const counter = document.getElementById("counter");

const sub = throwError(new Error("abc"))
  .pipe(
    take(3),
    finalize(() => {
      counter.innerHTML = "Stopped";
    }),
  )
  .subscribe(value => {
    counter.innerHTML = value;
  });
