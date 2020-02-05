> Ensure environment variable exists and convert to a number. If not, throw to fail early.

```ts
import forceNum from 'force-num'

const nodeEnv = forceNum('PORT')
// => 3000, or throw if not set or not a number
```
