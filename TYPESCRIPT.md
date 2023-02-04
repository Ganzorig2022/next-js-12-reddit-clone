## onChange()

```js
const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  // update form state
  setSignUpForm((prev) => ({
    ...prev,
    [event.target.name]: event.target.value,
  }));
};
```

## onSubmit (<form onSubmit={onSubmit}>)

```js
const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
};
```
