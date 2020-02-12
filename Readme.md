> Ensure environment variable exists and convert to a number. If not, throw to fail early.

```ts
import forceNum from 'force-num'

const nodeEnv = forceNum('PORT')
// => 3000, or throw if not set or not a number
```

## Related

- [force-env](https://github.com/stevemao/force-env) - Ensure environment variable exists. If not, throw to fail early.
