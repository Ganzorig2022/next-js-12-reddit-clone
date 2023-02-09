## Error: Error serializing `.communityData` returned from `getServerSideProps` in "/r/[communityName]".

Reason: `undefined` cannot be serialized as JSON. Please use `null` or omit this value.

```bash
pnpm add safe-json-stringify
```

```bash
pnpm add --save-dev @types/safe-json-stringify
```

1. "/src/pages/r/[communityName]/index.tsx" dotor serverSideProps-oor firebase-iin data duudahad iim aldaa garna.
