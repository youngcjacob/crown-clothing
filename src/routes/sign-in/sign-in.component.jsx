
import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

import {
    signInWithGooglePopup,
    createUserDocumentFromAuth,
    signInWithGoogleRedirect
}
    from "../../utils/firebase/firebase.utils";


import SignUpForm from '../../components/sign-up-form/sign-up-form.component'


// const signIn = () => {
//     useEffect(async () => {
//         const response = await getRedirectResult(auth);
//         if(response){
//             const userDocRef = await createUserDocumentFromAuth(response.user)
//         }
//         console.log(response);
//     }, [])
// }

const SignIn = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user)
    }

    const logGoogleRedirectUser = async () => {
        const { user } = await signInWithGoogleRedirect();
        console.log({ user });
    }


    return (
        <div>
            <h1>Sign in page</h1>
            <button onClick={logGoogleUser}>
                Sign in with Google popup
            </button>
            <button onClick={logGoogleRedirectUser}>
                Sign in with Google redirect
            </button>
            <SignUpForm />
        </div>
    )
}



export default SignIn;