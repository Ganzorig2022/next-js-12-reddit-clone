# COMPONENT STRUCTURE

1. Header Section

- App --> Layout --> <Navbar/> --> (Directory, Search Input, RightContent)
- RightContent --> AuthModal --> 1. OAuthButtons, 2. AuthInputs, 3. ResetPassword
- AuthInputs --> (Login, SignUp)
- Directory -->

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

#### CHAKRA - Icon

> https://chakra-ui.com/docs/components/icon/usage

#### CHAKRA - Inputs

> https://chakra-ui.com/docs/components/input/usage

#### CHAKRA - Custom button

> https://www.codiga.io/blog/component-library-chakra-ui-react/

#### CHAKRA - Responsiveness

> https://chakra-ui.com/docs/styled-system/responsive-styles

#### CHAKRA - Modal

#### CHAKRA - Menu

> https://chakra-ui.com/docs/components/menu

"/src/components/Navbar/RightContent/UserMenu.tsx"

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

#### 1 - React Firebase Hooks

> https://github.com/CSFrequency/react-firebase-hooks

```bash
pnpm add react-firebase-hooks
```

1. Sign Up

> https://github.com/CSFrequency/react-firebase-hooks/tree/master/auth#usecreateuserwithemailandpassword

- "/src/components/Modal/Auth/SignUp.tsx"....

2. OAuth

> https://github.com/CSFrequency/react-firebase-hooks/tree/master/auth#usesigninwithgoogle

- "/src/components/Modal/Auth/OAuthButtons.tsx"....

3. Reset Password

> https://github.com/CSFrequency/react-firebase-hooks/tree/master/auth#usesendpasswordresetemail

- "/src/components/Modal/Auth/ResetPassword.tsx"....

4.

#### 2 - Firebase - Cloud Functions

#### 3 - Firebase - Transactions

> https://firebase.google.com/docs/firestore/manage-data/transactions

```js
 try {
      const communityDocRef = doc(firestoreDB, 'communities', communityName);

      // ======= TRANSACTIONS method - All at once =======
      await runTransaction(firestoreDB, async (transaction) => {
        // similar to ==> const communityDoc = await getDoc(communityDocRef);
        const communityDoc = await transaction.get(communityDocRef);

        // Check if community is exists in db
        if (communityDoc.exists()) {
          throw new Error(`Sorry, /r${name} is taken. Try another.`);
        }

        //If valid name, create community
        // similar to ==> await setDoc(communityDocRef,{}
        transaction.set(communityDocRef, {
          creatorId: userId,
          createdAt: serverTimestamp(),
          numberOfMembers: 1,
          privacyType: 'public',
        });

        // Create communitySnippets  - SUBCOLLECTION
        transaction.set(
          doc(firestoreDB, `users/${userId}/communitySnippets`, communityName),
          {
            communityId: communityName,
            isModerator: true,
          }
        );
      });
```

## DYNAMIC ROUTE

1. "http://localhost:3000/r/[communityName]" ==> "/src/pages/r/[communityName]" buyu "index.tsx"

2. "http://localhost:3000/r/[communityName]/submit" ==> "/src/pages/r/[communityName]/submit.tsx"

## SERVER SIDE RENDERING

1. "http://localhost:3000/r/[communityName]" ==> "/src/pages/r/[communityName]" buyu "index.tsx"

```js
export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  try {
    const communityRef = doc(
      firestoreDB,
      'communities',
      context.query.communityName as string
    );

    const communityDoc = await getDoc(communityRef);
    return {
      props: {
        communityData: communityDoc.data(),
      },
    };
  } catch (error) {
    console.log('getServerSideProps error', error);
  }
};
```

## CUSTOM NotFound PAGE
