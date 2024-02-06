import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component'
import {CartDropdownContainer, EmptyMessage} from './cart-dropdown.styles.jsx'
import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'
import { useNavigate } from 'react-router-dom'

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext)
    const navigate = useNavigate()

    const goToCheckoutHandler = () => {
        navigate('/checkout')
    }

    return (
        <CartDropdownContainer>
        
            <div className='cart-items'>
                {
                    cartItems.length ? (cartItems.map(item => 
                    (<CartItem cartItem={item} />))) : (
                        <EmptyMessage>No Cart Items</EmptyMessage>
                    )

                }
                
            </div>

            <Button onClick={goToCheckoutHandler}> Checkout </Button>
            
             </CartDropdownContainer>
    )
}

export default CartDropdown

