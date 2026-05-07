import { Link } from 'react-router-dom';
import { products } from '../data/products';

function Home() {
    const featuredProducts = products.slice(0, 8);

    return (
        <div>
            {/* Hero Section */}
            <section style={styles.hero}>
                <div style={styles.heroOverlay}>
                    <div style={styles.heroContent}>
                        <h1 style={styles.heroTitle}>Summer Collection 2024</h1>
                        <p style={styles.heroText}>Up to 50% off on selected items</p>
                        <Link to="/shop" style={styles.shopBtn}>Shop Now →</Link>
                    </div>
                </div>
            </section>

            {/* Categories Section */}
            <section style={styles.categories}>
                <div style={styles.container}>
                    <h2 style={styles.sectionTitle}>Shop by Category</h2>
                    <div style={styles.categoryGrid}>
                        <Link to="/shop/men" style={styles.categoryCard}>
                            <div style={{ ...styles.categoryIcon, background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
                                👔
                            </div>
                            <h3>Men's Fashion</h3>
                            <p>{products.filter(p => p.category === 'men').length}+ Products</p>
                        </Link>
                        <Link to="/shop/women" style={styles.categoryCard}>
                            <div style={{ ...styles.categoryIcon, background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' }}>
                                👗
                            </div>
                            <h3>Women's Fashion</h3>
                            <p>{products.filter(p => p.category === 'women').length}+ Products</p>
                        </Link>
                        <Link to="/shop/accessories" style={styles.categoryCard}>
                            <div style={{ ...styles.categoryIcon, background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' }}>
                                🎒
                            </div>
                            <h3>Accessories</h3>
                            <p>{products.filter(p => p.category === 'accessories').length}+ Products</p>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Featured Products */}
            <section style={styles.featured}>
                <div style={styles.container}>
                    <h2 style={styles.sectionTitle}>Featured Products</h2>
                    <div style={styles.productGrid}>
                        {featuredProducts.map(product => (
                            <div key={product.id} style={styles.productCard} className="product-card">
                                <div style={styles.productImageContainer}>
                                    <img src={product.image} alt={product.name} style={styles.productImage} />
                                    <div style={styles.productOverlay}>
                                        <Link to={`/product/${product.id}`} style={styles.quickViewBtn}>
                                            Quick View
                                        </Link>
                                    </div>
                                </div>
                                <div style={styles.productInfo}>
                                    <h3 style={styles.productName}>{product.name}</h3>
                                    <p style={styles.productBrand}>{product.brand}</p>
                                    <div style={styles.priceContainer}>
                                        <span style={styles.productPrice}>₹{product.price.toLocaleString()}</span>
                                        <span style={styles.originalPrice}>₹{(product.price * 1.5).toLocaleString()}</span>
                                        <span style={styles.discount}>-33%</span>
                                    </div>
                                    <div style={styles.rating}>
                                        {"★".repeat(Math.floor(product.rating))}
                                        {"☆".repeat(5 - Math.floor(product.rating))}
                                        <span style={styles.ratingText}>({product.rating})</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Banner */}
            <section style={styles.banner}>
                <div style={styles.bannerContent}>
                    <h2>Limited Time Offer</h2>
                    <p>Get extra 20% off on orders above ₹5000</p>
                    <Link to="/shop" style={styles.bannerBtn}>Grab Deal →</Link>
                </div>
            </section>
        </div>
    );
}

const styles = {
    hero: {
        backgroundImage: 'url("https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1600")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '600px',
        position: 'relative'
    },
    heroOverlay: {
        background: 'linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 100%)',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    heroContent: {
        textAlign: 'center',
        color: 'white',
        maxWidth: '600px',
        padding: '20px'
    },
    heroTitle: {
        fontSize: '3.5rem',
        marginBottom: '1rem',
        fontWeight: 'bold'
    },
    heroText: {
        fontSize: '1.2rem',
        marginBottom: '2rem'
    },
    shopBtn: {
        display: 'inline-block',
        background: '#ff6b6b',
        color: 'white',
        padding: '1rem 2rem',
        textDecoration: 'none',
        borderRadius: '50px',
        fontWeight: 'bold',
        transition: 'transform 0.3s'
    },
    container: {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px'
    },
    categories: {
        padding: '4rem 0',
        background: '#fafafa'
    },
    sectionTitle: {
        textAlign: 'center',
        fontSize: '2.5rem',
        marginBottom: '3rem',
        color: '#1a1a1a'
    },
    categoryGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem'
    },
    categoryCard: {
        background: 'white',
        padding: '2rem',
        textAlign: 'center',
        borderRadius: '15px',
        textDecoration: 'none',
        color: '#333',
        transition: 'transform 0.3s, box-shadow 0.3s',
        boxShadow: '0 5px 20px rgba(0,0,0,0.05)',
        display: 'block'
    },
    categoryIcon: {
        width: '80px',
        height: '80px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '2.5rem',
        margin: '0 auto 1rem',
        color: 'white'
    },
    featured: {
        padding: '4rem 0'
    },
    productGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '2rem'
    },
    productCard: {
        background: 'white',
        borderRadius: '12px',
        overflow: 'hidden',
        transition: 'transform 0.3s, box-shadow 0.3s',
        boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
    },
    productImageContainer: {
        position: 'relative',
        overflow: 'hidden',
        height: '300px'
    },
    productImage: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        transition: 'transform 0.5s'
    },
    productOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0,0,0,0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0,
        transition: 'opacity 0.3s'
    },
    quickViewBtn: {
        background: 'white',
        color: '#333',
        padding: '0.75rem 1.5rem',
        borderRadius: '25px',
        textDecoration: 'none',
        fontWeight: 'bold'
    },
    productInfo: {
        padding: '1.5rem'
    },
    productName: {
        fontSize: '1.1rem',
        marginBottom: '0.5rem',
        color: '#333'
    },
    productBrand: {
        color: '#666',
        fontSize: '0.9rem',
        marginBottom: '0.5rem'
    },
    priceContainer: {
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        marginBottom: '0.5rem'
    },
    productPrice: {
        fontSize: '1.2rem',
        fontWeight: 'bold',
        color: '#ff6b6b'
    },
    originalPrice: {
        fontSize: '0.9rem',
        color: '#999',
        textDecoration: 'line-through'
    },
    discount: {
        fontSize: '0.8rem',
        color: '#4caf50',
        fontWeight: 'bold'
    },
    rating: {
        color: '#ffc107',
        fontSize: '0.9rem'
    },
    ratingText: {
        color: '#666',
        marginLeft: '0.5rem'
    },
    banner: {
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: '4rem',
        textAlign: 'center',
        color: 'white',
        marginTop: '4rem'
    },
    bannerContent: {
        maxWidth: '600px',
        margin: '0 auto'
    },
    bannerBtn: {
        display: 'inline-block',
        background: 'white',
        color: '#764ba2',
        padding: '1rem 2rem',
        textDecoration: 'none',
        borderRadius: '50px',
        fontWeight: 'bold',
        marginTop: '1rem'
    }
};

// Add hover effects
const styleSheet = document.createElement("style");
styleSheet.textContent = `
  .product-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 20px rgba(0,0,0,0.1);
  }
  .product-card:hover .product-image {
    transform: scale(1.05);
  }
  .product-card:hover .product-overlay {
    opacity: 1;
  }
  .category-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  }
  button:hover, .shop-btn:hover, .banner-btn:hover {
    transform: translateY(-2px);
    opacity: 0.9;
  }
`;
document.head.appendChild(styleSheet);

export default Home;