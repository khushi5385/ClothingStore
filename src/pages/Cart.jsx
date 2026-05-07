import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import CartItem from '../components/CartItem';

function Cart() {
    const { cart, updateQuantity, removeFromCart, getCartTotal } = useContext(CartContext);

    const updateItemQuantity = (id, newQuantity) => {
        if (newQuantity < 1) {
            removeFromCart(id);
        } else {
            updateQuantity(id, newQuantity);
        }
    };

    if (cart.length === 0) {
        return (
            <div style={styles.emptyCart}>
                <h2>Your cart is empty</h2>
                <p>Looks like you haven't added any items yet</p>
                <Link to="/shop" style={styles.shopBtn}>Continue Shopping</Link>
            </div>
        );
    }

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Shopping Cart</h1>

            <div style={styles.cartContainer}>
                <div style={styles.cartItems}>
                    {cart.map(item => (
                        <CartItem
                            key={item.id}
                            item={item}
                            updateQuantity={updateItemQuantity}
                            removeItem={removeFromCart}
                        />
                    ))}
                </div>

                <div style={styles.summary}>
                    <h3>Order Summary</h3>
                    <div style={styles.summaryRow}>
                        <span>Subtotal:</span>
                        <span>₹{getCartTotal().toLocaleString()}</span>
                    </div>
                    <div style={styles.summaryRow}>
                        <span>Shipping:</span>
                        <span>₹99</span>
                    </div>
                    <div style={styles.summaryRow}>
                        <span>Tax (GST):</span>
                        <span>₹{(getCartTotal() * 0.18).toLocaleString()}</span>
                    </div>
                    <div style={{ ...styles.summaryRow, ...styles.totalRow }}>
                        <span>Total:</span>
                        <span>₹{(getCartTotal() + 99 + (getCartTotal() * 0.18)).toLocaleString()}</span>
                    </div>
                    <Link to="/checkout" style={styles.checkoutBtn}>
                        Proceed to Checkout
                    </Link>
                </div>
            </div>
        </div>
    );
}

const styles = {
    container: {
        maxWidth: '1200px',
        margin: '2rem auto',
        padding: '0 20px'
    },
    title: {
        textAlign: 'center',
        marginBottom: '2rem'
    },
    emptyCart: {
        textAlign: 'center',
        padding: '4rem'
    },
    shopBtn: {
        display: 'inline-block',
        marginTop: '1rem',
        padding: '1rem 2rem',
        backgroundColor: '#1a1a1a',
        color: 'white',
        textDecoration: 'none',
        borderRadius: '5px'
    },
    cartContainer: {
        display: 'grid',
        gridTemplateColumns: '1fr 350px',
        gap: '2rem'
    },
    cartItems: {
        backgroundColor: 'white',
        borderRadius: '8px',
        border: '1px solid #e0e0e0'
    },
    summary: {
        backgroundColor: '#f5f5f5',
        padding: '1.5rem',
        borderRadius: '8px',
        height: 'fit-content'
    },
    summaryRow: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0.75rem 0',
        borderBottom: '1px solid #ddd'
    },
    totalRow: {
        borderTop: '2px solid #333',
        marginTop: '0.5rem',
        paddingTop: '1rem',
        fontWeight: 'bold',
        fontSize: '1.1rem'
    },
    checkoutBtn: {
        display: 'block',
        width: '100%',
        padding: '1rem',
        backgroundColor: '#ff6b6b',
        color: 'white',
        textAlign: 'center',
        textDecoration: 'none',
        borderRadius: '5px',
        fontWeight: 'bold',
        marginTop: '1rem'
    }
};

export default Cart;