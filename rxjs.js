//This code is not complete
//////////////////////////////////

Rx.Observable.from([1,2,3,4])
  .map(x => x * 10)
  .flatMap(x, i) => Rx.Observable.just(x).delay(i * 2000))
  .subscrible(console.log.bind(console));

//////////////////////////////////

Rx.Observable.from([1,2,3,4])
  .map(x => x * 10)
  .flatMap(x, i) => Rx.Observable.just(x).delay(i * 2000))
  .subscrible(console.log.bind(console), null() => console.log('Completed!'));

//////////////////////////////////

Rx.Observable.from([1,2,3,4])
  .map(x, i) => Rx.Observable.just(x).delay(i * 2000)).margeAll()
  .subscrible(console.log.bind(console), null() => console.log('Completed!'));
//////////////////////////////////

Rx.Observable.from([1,2,3,4])
var sl = Rx.Observable.from.([1,2,3,4]);
var sl = Rx.Observable.from.([1,2,3,4]);
Rx.Observable.zip(s1, s2, (v1, v2) => [x1, x2])
  
//////////////////////////////////

Rx.Observable.from([1,2,3,4])
var sl = Rx.Observable.from([1,2,3,4]);
var sl = Rx.Observable.from([1,2,3,4]);
var si = Rx.Observable.interval(1000).take(10);
var si = Rx.Observable.range(0, 10);

var dispose = Rs.Observable.zip(si, sr, (v1, v2) => ({x: v1, y: v2})).subscribe(x => console.log(x));

setTimeout(() => disposable.dispose(), 3000);

//////////////////////////////////
//This code is not complete