
import { getAuth } from "firebase/auth";

import FormInput from '../form-input/form-input.component'

import Button from '../button/button.component'

import './sign-in-form.styles.scss'

import { useState } from 'react'

import { createUserDocumentFromAuth, signInWithGooglePopup, signInAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils'

const defaultFormFields = {
    email: '',
    password: ''
}

const SignInForm = () => {


    const [formFields, setFormFields] = useState(defaultFormFields)
    const { email, password } = formFields;

    console.log(formFields)

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    const signInWithGoogle = async () => {
        const { user } = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user);
    }

    const handleSubmit = async (event) => {
        event.preventDefault(); //all of what is going to happen in the form we are going to handle

        try {
           const response = await signInAuthUserWithEmailAndPassword(email, password)
           console.log(response)
           console.log(event, email, password)

        }
        catch (error) {
            switch(error.code){
                case 'auth/wrong-password':
                    alert('incorrect password for email')
                    break;
                case 'auth/user-not-found':
                    alert('No user associated with this email');
                    break;  
                default:
                    console.log(error)
        }

    }
}

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({ ...formFields, [name]: value })
    }

    return (
        <div className='sign-in-container'>
            <h2>Sign in to account</h2>
            <form onSubmit={handleSubmit}>
                <FormInput label='Email' type='email' required onChange={handleChange} name='email' value={email} />
                <FormInput label='Password' type='password' required onChange={handleChange} name='password' value={password} />
                <div className="buttons-container">
                    <Button type="submit">Sign In </Button>
                    <Button type='button' buttonType='google' onclick={signInWithGoogle}>Google Sign In </Button>
                </div>
            </form>

        </div>
    )

}

export default SignInForm;