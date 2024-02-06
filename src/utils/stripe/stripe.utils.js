import { loadStripe } from "@stripe/stripe-js";
//what runs for us to know this is our stripe instance

export const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);




