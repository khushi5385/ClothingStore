import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProductsByCategory } from '../data/products';

function Shop() {
    const { category } = useParams();
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [priceRange, setPriceRange] = useState(10000);
    const [sortBy, setSortBy] = useState('default');

    useEffect(() => {
        const allProducts = getProductsByCategory(category || 'all');
        setProducts(allProducts);
        setFilteredProducts(allProducts);
    }, [category]);

    useEffect(() => {
        let filtered = [...products];

        filtered = filtered.filter(p => p.price <= priceRange);

        if (sortBy === 'price-low') {
            filtered.sort((a, b) => a.price - b.price);
        } else if (sortBy === 'price-high') {
            filtered.sort((a, b) => b.price - a.price);
        } else if (sortBy === 'rating') {
            filtered.sort((a, b) => b.rating - a.rating);
        }

        setFilteredProducts(filtered);
    }, [products, priceRange, sortBy]);

    const categoryTitle = {
        men: "Men's Collection",
        women: "Women's Collection",
        accessories: "Accessories",
        all: "All Products"
    };

    return (
        <div style={styles.container}>
            <div style={styles.sidebar}>
                <h3 style={styles.sidebarTitle}>Filters</h3>

                <div style={styles.filterSection}>
                    <h4>Price Range: ₹{priceRange.toLocaleString()}</h4>
                    <input
                        type="range"
                        min="0"
                        max="10000"
                        value={priceRange}
                        onChange={(e) => setPriceRange(Number(e.target.value))}
                        style={styles.rangeInput}
                    />
                </div>

                <div style={styles.filterSection}>
                    <h4>Sort By</h4>
                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        style={styles.select}
                    >
                        <option value="default">Default</option>
                        <option value="price-low">Price: Low to High</option>
                        <option value="price-high">Price: High to Low</option>
                        <option value="rating">Top Rated</option>
                    </select>
                </div>
            </div>

            <div style={styles.productsSection}>
                <div style={styles.header}>
                    <h2>{categoryTitle[category || 'all']}</h2>
                    <p style={styles.productCount}>{filteredProducts.length} products found</p>
                </div>

                <div style={styles.productGrid}>
                    {filteredProducts.map(product => (
                        <Link to={`/product/${product.id}`} key={product.id} style={styles.productCard}>
                            <div style={styles.imageContainer}>
                                <img src={product.image} alt={product.name} style={styles.productImage} />
                            </div>
                            <div style={styles.productInfo}>
                                <h3 style={styles.productName}>{product.name}</h3>
                                <p style={styles.brand}>{product.brand}</p>
                                <p style={styles.price}>₹{product.price.toLocaleString()}</p>
                                <div style={styles.rating}>
                                    {"★".repeat(Math.floor(product.rating))}
                                    <span style={styles.ratingText}>({product.rating})</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        maxWidth: '1400px',
        margin: '2rem auto',
        padding: '0 2rem',
        gap: '2rem',
        minHeight: 'calc(100vh - 200px)'
    },
    sidebar: {
        width: '280px',
        background: 'white',
        padding: '1.5rem',
        borderRadius: '12px',
        height: 'fit-content',
        position: 'sticky',
        top: '100px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
    },
    sidebarTitle: {
        fontSize: '1.3rem',
        marginBottom: '1.5rem',
        paddingBottom: '0.5rem',
        borderBottom: '2px solid #ff6b6b'
    },
    filterSection: {
        marginBottom: '1.5rem'
    },
    rangeInput: {
        width: '100%',
        margin: '0.5rem 0'
    },
    select: {
        width: '100%',
        padding: '0.5rem',
        border: '1px solid #ddd',
        borderRadius: '8px',
        marginTop: '0.5rem'
    },
    productsSection: {
        flex: 1
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '2rem',
        flexWrap: 'wrap'
    },
    productCount: {
        color: '#666'
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
        textDecoration: 'none',
        color: '#333',
        transition: 'transform 0.3s, box-shadow 0.3s',
        boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
    },
    imageContainer: {
        height: '300px',
        overflow: 'hidden'
    },
    productImage: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        transition: 'transform 0.3s'
    },
    productInfo: {
        padding: '1rem'
    },
    productName: {
        fontSize: '1rem',
        marginBottom: '0.5rem',
        color: '#1a1a1a'
    },
    brand: {
        color: '#666',
        fontSize: '0.9rem',
        marginBottom: '0.5rem'
    },
    price: {
        fontSize: '1.2rem',
        fontWeight: 'bold',
        color: '#ff6b6b',
        marginBottom: '0.5rem'
    },
    rating: {
        color: '#ffc107'
    },
    ratingText: {
        color: '#666',
        marginLeft: '0.5rem'
    }
};

export default Shop;