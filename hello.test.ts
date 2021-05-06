import {Subject, combineLatest} from 'rxjs'

it('', () => {
  const a = new Subject<number>()
  const b = new Subject<number>()

  const c = combineLatest(a, b)
  c.subscribe(([a, b]) => console.log(a + b))

  a.next(3)
  b.next(3)
})
