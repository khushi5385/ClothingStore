import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

function ProductCard({ product }) {
    const { addToCart } = useContext(CartContext);

    return (
        <div style={styles.card}>
            <Link to={`/product/${product.id}`}>
                <img
                    src={product.image}
                    alt={product.name}
                    style={styles.image}
                />
            </Link>
            <div style={styles.info}>
                <Link to={`/product/${product.id}`} style={styles.nameLink}>
                    <h3 style={styles.name}>{product.name}</h3>
                </Link>
                <p style={styles.category}>{product.category}</p>
                <p style={styles.price}>₹{product.price.toLocaleString()}</p>
                <button
                    onClick={() => addToCart(product)}
                    style={styles.button}
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
}

const styles = {
    card: {
        border: '1px solid #e0e0e0',
        borderRadius: '8px',
        overflow: 'hidden',
        transition: 'transform 0.3s, box-shadow 0.3s',
        backgroundColor: 'white'
    },
    image: {
        width: '100%',
        height: '300px',
        objectFit: 'cover'
    },
    info: {
        padding: '1rem'
    },
    nameLink: {
        textDecoration: 'none'
    },
    name: {
        fontSize: '1.1rem',
        margin: '0 0 0.5rem 0',
        color: '#333'
    },
    category: {
        color: '#666',
        fontSize: '0.9rem',
        margin: '0 0 0.5rem 0'
    },
    price: {
        fontSize: '1.2rem',
        fontWeight: 'bold',
        color: '#ff6b6b',
        margin: '0 0 1rem 0'
    },
    button: {
        width: '100%',
        padding: '0.75rem',
        backgroundColor: '#1a1a1a',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '1rem',
        transition: 'background-color 0.3s'
    }
};

export default ProductCard;