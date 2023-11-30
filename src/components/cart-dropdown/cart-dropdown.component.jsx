import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component'
import './cart-dropdown.styles.scss'
import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'

// import data from '../../shop-data.json' 



const CartDropdown = () => {
    const { cartItems } = useContext(CartContext)

    return(
        <div className='cart-dropdown-container'>
            
            <div className='cart-items'> 
            {/* need to pass an array of items here */}
            {cartItems.map(item => <CartItem cartItem={item} />)}
            </div>
        <Button>Go To Checkout</Button>    
        </div>
    )
}

export default CartDropdown