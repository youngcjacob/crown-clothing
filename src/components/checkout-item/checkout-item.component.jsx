// import { CartContext } from "../../contexts/cart.context"

import './checkout-item.styles.scss'
import { useState } from 'react'

import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'

const CheckoutItem = ({ cartItem }) => {

    const { cartItems, updateCartItems } = useContext(CartContext)

    const { name, imageUrl, price, quantity } = cartItem;

    const [itemDetails, setItemDetails] = useState(cartItem)

    const decreaseCount = (item) => {

        const updatedQuantity = item.quantity - 1

        console.log(item.quantity)
        console.log(updatedQuantity)

        setItemDetails({ ...item, quantity: updatedQuantity }
        )

        updateCartItems('new')

    }

    const increaseCount = (item) => {

        const updatedQuantity = item.quantity + 1

        setItemDetails({ ...item, quantity: updatedQuantity }
        )
        console.log(itemDetails)
    }

    const removeItem = (item) => {

    }

    // console.log(itemDetails)

    return (
        <div id='checkout-item'>
            <img src={imageUrl} alt={`${name}`} />
            <span className='name'>{name}</span>
            <span className='quantity'>
                <button onClick={() => decreaseCount(cartItem)}>{'<'}</button>
                {itemDetails.quantity}
                <button onClick={() => increaseCount(cartItem)}>{'>'}</button>
            </span>
            <span className='price'>{price}</span>
            <span className='remove'>
                <button onClick={() => removeItem(cartItem)}>X</button>Remove
            </span>

        </div>
    )
}

export default CheckoutItem
