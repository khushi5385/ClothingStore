import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { cart } = useContext(CartContext);

    const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

    return (
        <nav style={styles.navbar}>
            <div style={styles.container}>
                <Link to="/" style={styles.logo}>
                    👕 FASHION HUB
                </Link>

                <div style={styles.desktopMenu}>
                    <Link to="/" style={styles.link}>Home</Link>
                    <Link to="/shop/men" style={styles.link}>Men</Link>
                    <Link to="/shop/women" style={styles.link}>Women</Link>
                    <Link to="/shop/accessories" style={styles.link}>Accessories</Link>
                    <Link to="/cart" style={styles.cartLink}>
                        🛒 Cart ({cartItemCount})
                    </Link>
                </div>

                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    style={styles.menuBtn}
                >
                    ☰
                </button>
            </div>

            {isMenuOpen && (
                <div style={styles.mobileMenu}>
                    <Link to="/" style={styles.mobileLink}>Home</Link>
                    <Link to="/shop/men" style={styles.mobileLink}>Men</Link>
                    <Link to="/shop/women" style={styles.mobileLink}>Women</Link>
                    <Link to="/shop/accessories" style={styles.mobileLink}>Accessories</Link>
                    <Link to="/cart" style={styles.mobileLink}>Cart ({cartItemCount})</Link>
                </div>
            )}
        </nav>
    );
}

const styles = {
    navbar: {
        backgroundColor: '#ffffff',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        background: 'rgba(255,255,255,0.95)',
        backdropFilter: 'blur(10px)'
    },
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 2rem',
        maxWidth: '1400px',
        margin: '0 auto'
    },
    logo: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        textDecoration: 'none'
    },
    desktopMenu: {
        display: 'flex',
        gap: '2rem',
        alignItems: 'center'
    },
    link: {
        color: '#333',
        textDecoration: 'none',
        fontSize: '1rem',
        fontWeight: '500',
        transition: 'color 0.3s'
    },
    cartLink: {
        color: '#ff6b6b',
        textDecoration: 'none',
        fontWeight: 'bold',
        fontSize: '1rem'
    },
    menuBtn: {
        display: 'none',
        background: 'none',
        border: 'none',
        fontSize: '1.5rem',
        cursor: 'pointer'
    },
    mobileMenu: {
        display: 'flex',
        flexDirection: 'column',
        padding: '1rem',
        backgroundColor: 'white',
        borderTop: '1px solid #eee'
    },
    mobileLink: {
        color: '#333',
        textDecoration: 'none',
        padding: '0.75rem 0',
        borderBottom: '1px solid #eee'
    }
};

export default Navbar;