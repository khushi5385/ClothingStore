import { useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProductById } from '../data/products';
import { CartContext } from '../context/CartContext';

function ProductDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { addToCart } = useContext(CartContext);
    const [selectedSize, setSelectedSize] = useState('');
    const [quantity, setQuantity] = useState(1);

    const product = getProductById(parseInt(id));

    if (!product) {
        return (
            <div style={styles.notFound}>
                <h2>Product not found!</h2>
                <button onClick={() => navigate('/shop')} style={styles.backBtn}>
                    Back to Shop
                </button>
            </div>
        );
    }

    const handleAddToCart = () => {
        if (product.sizes && product.sizes[0] !== 'Free Size' && product.sizes[0] !== 'One Size' && !selectedSize) {
            alert('Please select a size');
            return;
        }
        addToCart({ ...product, quantity, selectedSize: selectedSize || 'One Size' });
        alert('Added to cart!');
        navigate('/cart');
    };

    return (
        <div style={styles.container}>
            <div style={styles.productContainer}>
                <div style={styles.imageSection}>
                    <img src={product.image} alt={product.name} style={styles.mainImage} />
                </div>

                <div style={styles.detailsSection}>
                    <h1 style={styles.title}>{product.name}</h1>
                    <p style={styles.brand}>Brand: {product.brand}</p>
                    <div style={styles.rating}>
                        {"★".repeat(Math.floor(product.rating))}
                        {"☆".repeat(5 - Math.floor(product.rating))}
                        <span>({product.rating})</span>
                    </div>
                    <p style={styles.price}>₹{product.price.toLocaleString()}</p>
                    <p style={styles.description}>{product.description}</p>

                    {product.sizes && product.sizes[0] !== 'Free Size' && product.sizes[0] !== 'One Size' && (
                        <div style={styles.sizeSection}>
                            <h3>Select Size:</h3>
                            <div style={styles.sizeOptions}>
                                {product.sizes.map(size => (
                                    <button
                                        key={size}
                                        onClick={() => setSelectedSize(size)}
                                        style={{
                                            ...styles.sizeBtn,
                                            ...(selectedSize === size && styles.selectedSize)
                                        }}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    <div style={styles.quantitySection}>
                        <h3>Quantity:</h3>
                        <div style={styles.quantityControls}>
                            <button
                                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                style={styles.qtyBtn}
                            >
                                -
                            </button>
                            <span style={styles.quantity}>{quantity}</span>
                            <button
                                onClick={() => setQuantity(quantity + 1)}
                                style={styles.qtyBtn}
                            >
                                +
                            </button>
                        </div>
                    </div>

                    <button onClick={handleAddToCart} style={styles.addToCartBtn}>
                        Add to Cart
                    </button>
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
    productContainer: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '3rem',
        background: 'white',
        borderRadius: '12px',
        padding: '2rem',
        boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
    },
    imageSection: {
        textAlign: 'center'
    },
    mainImage: {
        width: '100%',
        maxHeight: '500px',
        objectFit: 'cover',
        borderRadius: '10px'
    },
    detailsSection: {
        textAlign: 'left'
    },
    title: {
        fontSize: '2rem',
        marginBottom: '0.5rem',
        color: '#1a1a1a'
    },
    brand: {
        color: '#666',
        marginBottom: '0.5rem'
    },
    rating: {
        color: '#ffc107',
        marginBottom: '1rem'
    },
    price: {
        fontSize: '1.5rem',
        color: '#ff6b6b',
        fontWeight: 'bold',
        marginBottom: '1rem'
    },
    description: {
        lineHeight: '1.6',
        marginBottom: '2rem',
        color: '#555'
    },
    sizeSection: {
        marginBottom: '2rem'
    },
    sizeOptions: {
        display: 'flex',
        gap: '1rem',
        marginTop: '0.5rem',
        flexWrap: 'wrap'
    },
    sizeBtn: {
        width: '50px',
        padding: '0.5rem',
        border: '1px solid #ddd',
        backgroundColor: 'white',
        cursor: 'pointer',
        borderRadius: '5px',
        transition: 'all 0.3s'
    },
    selectedSize: {
        backgroundColor: '#1a1a1a',
        color: 'white',
        borderColor: '#1a1a1a'
    },
    quantitySection: {
        marginBottom: '2rem'
    },
    quantityControls: {
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        marginTop: '0.5rem'
    },
    qtyBtn: {
        width: '40px',
        height: '40px',
        borderRadius: '5px',
        border: '1px solid #ddd',
        backgroundColor: 'white',
        cursor: 'pointer',
        fontSize: '1.2rem'
    },
    quantity: {
        fontSize: '1.2rem',
        minWidth: '40px',
        textAlign: 'center'
    },
    addToCartBtn: {
        width: '100%',
        padding: '1rem',
        backgroundColor: '#1a1a1a',
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        fontSize: '1.1rem',
        fontWeight: 'bold',
        transition: 'background 0.3s'
    },
    notFound: {
        textAlign: 'center',
        padding: '4rem'
    },
    backBtn: {
        marginTop: '1rem',
        padding: '0.75rem 1.5rem',
        backgroundColor: '#1a1a1a',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
    }
};

export default ProductDetail;