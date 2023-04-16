# feathers-query-in-repro

> Repro repo for showing $in query bug

## Steps used to create this project
```javascript
feathers generate app
feathers generate service // create foo service
```
## Instructions to reproduce
```
npm install
npm run test
```

## Error output
```
TSError: ⨯ Unable to compile TypeScript:
test/services/foo/foo.test.ts:12:7 - error TS2769: No overload matches this call.
  Overload 1 of 4, '(params?: (FooParams & { paginate?: PaginationOptions | undefined; }) | undefined): Promise<Paginated<{ id: number; text: string; }>>', gave the following error.
    Type '{ $in: string[]; }' is not assignable to type 'string | { [x: string]: never; [x: number]: never; [x: symbol]: never; $gt?: string | undefined; $gte?: string | undefined; $lt?: string | undefined; $lte?: string | undefined; $ne?: string | undefined; $in?: string[] | undefined; $nin?: string[] | undefined; } | undefined'.
      Type '{ $in: string[]; }' is not assignable to type '{ [x: string]: never; [x: number]: never; [x: symbol]: never; $gt?: string | undefined; $gte?: string | undefined; $lt?: string | undefined; $lte?: string | undefined; $ne?: string | undefined; $in?: string[] | undefined; $nin?: string[] | undefined; }'.
        Property '$in' is incompatible with index signature.
          Type 'string[]' is not assignable to type 'never'.
  Overload 2 of 4, '(params?: (FooParams & { paginate: false; }) | undefined): Promise<{ id: number; text: string; }[]>', gave the following error.
    Type '{ $in: string[]; }' is not assignable to type 'string | { [x: string]: never; [x: number]: never; [x: symbol]: never; $gt?: string | undefined; $gte?: string | undefined; $lt?: string | undefined; $lte?: string | undefined; $ne?: string | undefined; $in?: string[] | undefined; $nin?: string[] | undefined; } | undefined'.
      Type '{ $in: string[]; }' is not assignable to type '{ [x: string]: never; [x: number]: never; [x: symbol]: never; $gt?: string | undefined; $gte?: string | undefined; $lt?: string | undefined; $lte?: string | undefined; $ne?: string | undefined; $in?: string[] | undefined; $nin?: string[] | undefined; }'.
        Property '$in' is incompatible with index signature.
          Type 'string[]' is not assignable to type 'never'.
  Overload 3 of 4, '(params?: FooParams | undefined): Promise<Paginated<{ id: number; text: string; }> | { id: number; text: string; }[]>', gave the following error.
    Type '{ $in: string[]; }' is not assignable to type 'string | { [x: string]: never; [x: number]: never; [x: symbol]: never; $gt?: string | undefined; $gte?: string | undefined; $lt?: string | undefined; $lte?: string | undefined; $ne?: string | undefined; $in?: string[] | undefined; $nin?: string[] | undefined; } | undefined'.
      Type '{ $in: string[]; }' is not assignable to type '{ [x: string]: never; [x: number]: never; [x: symbol]: never; $gt?: string | undefined; $gte?: string | undefined; $lt?: string | undefined; $lte?: string | undefined; $ne?: string | undefined; $in?: string[] | undefined; $nin?: string[] | undefined; }'.
        Property '$in' is incompatible with index signature.
          Type 'string[]' is not assignable to type 'never'.

12       text: { $in: ['foo', 'bar']}
```