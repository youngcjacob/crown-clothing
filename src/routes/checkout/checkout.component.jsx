import './checkout.styles.scss'

import { useContext } from 'react' 
import { CartContext } from '../../contexts/cart.context'

const Checkout = () => {

const  { cartItems, addItemToCart, removeItemToCart } = useContext(CartContext)

    return( 
        <div>

            <div id='checkout-title'>
                <div>Product</div>
                <div>Description</div>
                <div>Quantity</div>
                <div>Price</div>
                <div>Remove</div>
            </div>

            <br />

            {cartItems.map(cartItem => {
                const {id, name, quantity, price} = cartItem;
                return <div key={id}> 
                    <div>{name}</div>
                    <div>{quantity}</div>
                    <div>{price}</div>
                    <div onClick={()=>addItemToCart(cartItem)}>Increase</div>
                    <div onClick={()=>removeItemToCart(cartItem)}>Decrease</div> <br />

                </div>
            }
                )
            }
            
        </div>
    )
}

export default Checkout


