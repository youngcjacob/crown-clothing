import {CheckoutContainer} from './checkout.styles.jsx'

import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'

import PaymentForm from '../../components/payment-form/payment-form.component.jsx'


import CheckoutItem from '../../components/checkout-item/checkout-item.component.jsx'


const Checkout = () => {

    const { cartItems, addItemToCart, removeItemFromCart, cartTotal } = useContext(CartContext)

    return (
        <CheckoutContainer>

            <div className='checkout-header'>

                <div className='header-block'>
                    <span>Product</span></div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>

            <br />

            {cartItems.map(cartItem => {
                return (
                    <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                )
            }
            )
            }
            <span className='total'>Total: ${cartTotal}
            </span>

            <PaymentForm />

            </CheckoutContainer>
    )
}

export default Checkout


