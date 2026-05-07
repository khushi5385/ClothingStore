function CartItem({ item, updateQuantity, removeItem }) {
    return (
        <div style={styles.cartItem}>
            <img src={item.image} alt={item.name} style={styles.image} />

            <div style={styles.details}>
                <h3 style={styles.name}>{item.name}</h3>
                <p style={styles.price}>₹{item.price.toLocaleString()}</p>
                <p style={styles.size}>Size: {item.selectedSize || 'One Size'}</p>
            </div>

            <div style={styles.quantityControls}>
                <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    style={styles.qtyBtn}
                >
                    -
                </button>
                <span style={styles.quantity}>{item.quantity}</span>
                <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    style={styles.qtyBtn}
                >
                    +
                </button>
            </div>

            <div style={styles.total}>
                <p>₹{(item.price * item.quantity).toLocaleString()}</p>
                <button
                    onClick={() => removeItem(item.id)}
                    style={styles.removeBtn}
                >
                    Remove
                </button>
            </div>
        </div>
    );
}

const styles = {
    cartItem: {
        display: 'grid',
        gridTemplateColumns: '100px 1fr auto auto',
        gap: '1rem',
        alignItems: 'center',
        padding: '1rem',
        borderBottom: '1px solid #e0e0e0'
    },
    image: {
        width: '100px',
        height: '100px',
        objectFit: 'cover',
        borderRadius: '5px'
    },
    details: {
        textAlign: 'left'
    },
    name: {
        margin: '0 0 0.5rem 0',
        fontSize: '1rem'
    },
    price: {
        color: '#ff6b6b',
        fontWeight: 'bold',
        margin: '0 0 0.5rem 0'
    },
    size: {
        color: '#666',
        fontSize: '0.9rem',
        margin: 0
    },
    quantityControls: {
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem'
    },
    qtyBtn: {
        width: '30px',
        height: '30px',
        borderRadius: '50%',
        border: '1px solid #ddd',
        backgroundColor: 'white',
        cursor: 'pointer',
        fontSize: '1rem'
    },
    quantity: {
        minWidth: '30px',
        textAlign: 'center'
    },
    total: {
        textAlign: 'right'
    },
    removeBtn: {
        backgroundColor: '#ff4444',
        color: 'white',
        border: 'none',
        padding: '0.5rem 1rem',
        borderRadius: '5px',
        cursor: 'pointer',
        marginTop: '0.5rem'
    }
};

export default CartItem;