import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

function Checkout() {
    const { cart, getCartTotal, clearCart } = useContext(CartContext);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        city: '',
        pincode: '',
        cardNumber: '',
        expiry: '',
        cvv: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Order placed successfully!');
        clearCart();
        navigate('/');
    };

    const subtotal = getCartTotal();
    const shipping = 99;
    const tax = subtotal * 0.18;
    const total = subtotal + shipping + tax;

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Checkout</h1>

            <div style={styles.checkoutContainer}>
                <form onSubmit={handleSubmit} style={styles.form}>
                    <h3>Shipping Information</h3>
                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleChange}
                        style={styles.input}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        style={styles.input}
                        required
                    />
                    <textarea
                        name="address"
                        placeholder="Address"
                        value={formData.address}
                        onChange={handleChange}
                        style={styles.textarea}
                        required
                    />
                    <input
                        type="text"
                        name="city"
                        placeholder="City"
                        value={formData.city}
                        onChange={handleChange}
                        style={styles.input}
                        required
                    />
                    <input
                        type="text"
                        name="pincode"
                        placeholder="Pincode"
                        value={formData.pincode}
                        onChange={handleChange}
                        style={styles.input}
                        required
                    />

                    <h3 style={{ marginTop: '1rem' }}>Payment Information</h3>
                    <input
                        type="text"
                        name="cardNumber"
                        placeholder="Card Number"
                        value={formData.cardNumber}
                        onChange={handleChange}
                        style={styles.input}
                        required
                    />
                    <div style={styles.row}>
                        <input
                            type="text"
                            name="expiry"
                            placeholder="MM/YY"
                            value={formData.expiry}
                            onChange={handleChange}
                            style={{ ...styles.input, width: '48%' }}
                            required
                        />
                        <input
                            type="text"
                            name="cvv"
                            placeholder="CVV"
                            value={formData.cvv}
                            onChange={handleChange}
                            style={{ ...styles.input, width: '48%' }}
                            required
                        />
                    </div>

                    <button type="submit" style={styles.placeOrderBtn}>
                        Place Order • ₹{total.toLocaleString()}
                    </button>
                </form>

                <div style={styles.orderSummary}>
                    <h3>Order Summary</h3>
                    {cart.map(item => (
                        <div key={item.id} style={styles.orderItem}>
                            <span>{item.name} x{item.quantity}</span>
                            <span>₹{(item.price * item.quantity).toLocaleString()}</span>
                        </div>
                    ))}
                    <div style={styles.summaryRow}>
                        <span>Subtotal:</span>
                        <span>₹{subtotal.toLocaleString()}</span>
                    </div>
                    <div style={styles.summaryRow}>
                        <span>Shipping:</span>
                        <span>₹{shipping.toLocaleString()}</span>
                    </div>
                    <div style={styles.summaryRow}>
                        <span>Tax (GST):</span>
                        <span>₹{tax.toLocaleString()}</span>
                    </div>
                    <div style={{ ...styles.summaryRow, ...styles.totalRow }}>
                        <span>Total:</span>
                        <span>₹{total.toLocaleString()}</span>
                    </div>
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
    checkoutContainer: {
        display: 'grid',
        gridTemplateColumns: '1fr 350px',
        gap: '2rem'
    },
    form: {
        backgroundColor: '#f5f5f5',
        padding: '2rem',
        borderRadius: '8px'
    },
    input: {
        width: '100%',
        padding: '0.75rem',
        marginBottom: '1rem',
        border: '1px solid #ddd',
        borderRadius: '5px',
        fontSize: '1rem'
    },
    textarea: {
        width: '100%',
        padding: '0.75rem',
        marginBottom: '1rem',
        border: '1px solid #ddd',
        borderRadius: '5px',
        fontSize: '1rem',
        minHeight: '80px'
    },
    row: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    placeOrderBtn: {
        width: '100%',
        padding: '1rem',
        backgroundColor: '#ff6b6b',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '1.1rem',
        fontWeight: 'bold',
        marginTop: '1rem'
    },
    orderSummary: {
        backgroundColor: '#f5f5f5',
        padding: '1.5rem',
        borderRadius: '8px',
        height: 'fit-content'
    },
    orderItem: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0.5rem 0',
        borderBottom: '1px solid #ddd'
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
    }
};

export default Checkout;