import React from 'react'

const Cart = () => {
    const cartItems = (
        <ul>
            {cartCtx.items.map((item) => (
                <CartItem
                    key={item.id}
                    name={item.name}
                    large={item.large}
                    medium={item.medium}
                    small={item.small}
                    price={item.price}

                />
            ))}
        </ul>
    );


    
    return (
        <div>
             {cartItems}
            <div className={classes.total}>
                <span>Total Price</span>
                <span>{total}</span>
            </div>

            <div className={classes.actions}>
                <button>
                    Place Order
                </button>
                <button>Cancel</button>
            </div>

      

        </div>
    )
}

export default Cart