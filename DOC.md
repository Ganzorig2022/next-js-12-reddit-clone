## Installiing Next app with Typescript

> https://nextjs.org/docs/basic-features/typescript

```bash
pnpm create next-app --ts

```

## CHAKRA UI with Next JS

> https://chakra-ui.com/getting-started > https://chakra-ui.com/getting-started/nextjs-guide

```bash
pnpm add @chakra-ui/react @emotion/react @emotion/styled framer-motion
```

1. "/src/pages/\_app.tsx" provider WRAP hiine.
2. "/src/chakra/theme.ts" theme uusgeed, app.tsx dotor duudna
3. Installing fonts (open-sans)
   > https://chakra-ui.com/community/recipes/using-fonts
4. GLOBAL STYLES (fonts, body...)
   "/src/chakra/theme.ts"

### CHAKRA - Icon

> https://chakra-ui.com/docs/components/icon/usage

### CHAKRA - Inputs

> https://chakra-ui.com/docs/components/input/usage

### CHAKRA - Custom button

> https://www.codiga.io/blog/component-library-chakra-ui-react/

### CHAKRA - Responsiveness

> https://chakra-ui.com/docs/styled-system/responsive-styles

### CHAKRA - Modal

## RECOIL - GLOBAL STATE MANAGEMENT

> https://recoiljs.org/docs/introduction/getting-started/

1. Installing

```bash
npm i recoil
```

2. "/src/pages/\_app.tsx" dotor "RecoilRoot"-eer WRAP hiine.
   "/src/atoms/authModalAtom.ts" - dr config-ee hiine.
3. "/src/components/Modal/Auth/AuthModal.tsx" dotor {state, setState} 2ulang ni ashiglana gewel **useRecoilState**-ig ashiglana.

```js
const [modalState, setModalState] = useRecoilState(authModalState);
```

4. "/src/components/Navbar/RightContent/AuthButtons.tsx" dotor zowhon **setStateValue** hiine gewel **useSetRecoilState**--ig ashiglana.

```js
const setAuthModalState = useSetRecoilState(authModalState);
```

5. "/src/components/Modal/Auth/AuthInputs.tsx" dotor zowhon **stateValue** ashiglana gewel **useRecoilValue**--ig ashiglana.

## FIREBASE

1. firebase project setup hiine.
2. "/src/firebase/clientApp.ts" config hiiw.
3. .env.local

#### React Firebase Hooks

> https://github.com/CSFrequency/react-firebase-hooks

```bash
pnpm add react-firebase-hooks
```

1. useCreateUserWithEmailAndPassword()

> https://github.com/CSFrequency/react-firebase-hooks/tree/master/auth#usecreateuserwithemailandpassword

- "/src/components/Modal/Auth/SignUp.tsx"....

3. OAuth

> https://github.com/CSFrequency/react-firebase-hooks/tree/master/auth#usesigninwithgoogle

- "/src/components/Modal/Auth/OAuthButtons.tsx"....
