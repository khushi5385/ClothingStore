import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer style={styles.footer}>
            <div style={styles.container}>
                <div style={styles.section}>
                    <h3 style={styles.sectionTitle}>About Us</h3>
                    <p style={styles.description}>Your one-stop shop for trendy and fashionable clothing for men, women, and accessories.</p>
                    <p style={styles.description}>Quality products at affordable prices with fast shipping.</p>
                </div>

                <div style={styles.section}>
                    <h3 style={styles.sectionTitle}>Quick Links</h3>
                    <Link to="/" style={styles.link}>🏠 Home</Link>
                    <Link to="/shop/men" style={styles.link}>👔 Men's Collection</Link>
                    <Link to="/shop/women" style={styles.link}>👗 Women's Collection</Link>
                    <Link to="/shop/accessories" style={styles.link}>🎒 Accessories</Link>
                    <Link to="/shop" style={styles.link}>🛍️ All Products</Link>
                </div>

                <div style={styles.section}>
                    <h3 style={styles.sectionTitle}>Customer Service</h3>
                    <Link to="/" style={styles.link}>📞 Contact Us</Link>
                    <Link to="/" style={styles.link}>📖 Privacy Policy</Link>
                    <Link to="/" style={styles.link}>📜 Terms & Conditions</Link>
                    <Link to="/" style={styles.link}>🚚 Shipping Info</Link>
                    <Link to="/" style={styles.link}>🔄 Return Policy</Link>
                </div>

                <div style={styles.section}>
                    <h3 style={styles.sectionTitle}>Contact Info</h3>
                    <p style={styles.contactInfo}>📧 support@fashionhub.com</p>
                    <p style={styles.contactInfo}>📞 +91 98765 43210</p>
                    <p style={styles.contactInfo}>📍 Mumbai, India</p>
                    <div style={styles.socialIcons}>
                        <a href="#" style={styles.socialIcon}>📘</a>
                        <a href="#" style={styles.socialIcon}>📷</a>
                        <a href="#" style={styles.socialIcon}>🐦</a>
                        <a href="#" style={styles.socialIcon}>🔗</a>
                    </div>
                </div>
            </div>

            <div style={styles.bottom}>
                <p>&copy; 2024 Fashion Hub. All rights reserved. | Made with ❤️ for fashion lovers</p>
            </div>
        </footer>
    );
}

const styles = {
    footer: {
        backgroundColor: '#1a1a1a',
        color: 'white',
        marginTop: 'auto',
        padding: '3rem 0 0 0'
    },
    container: {
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '2rem',
        padding: '0 20px 2rem 20px'
    },
    section: {
        textAlign: 'left'
    },
    sectionTitle: {
        fontSize: '1.2rem',
        marginBottom: '1rem',
        color: '#ff6b6b',
        position: 'relative',
        paddingBottom: '0.5rem'
    },
    description: {
        lineHeight: '1.6',
        color: '#aaa',
        marginBottom: '0.5rem'
    },
    link: {
        display: 'block',
        color: '#aaa',
        textDecoration: 'none',
        marginBottom: '0.75rem',
        transition: 'color 0.3s, transform 0.3s',
        fontSize: '0.95rem'
    },
    contactInfo: {
        color: '#aaa',
        marginBottom: '0.75rem',
        fontSize: '0.95rem'
    },
    socialIcons: {
        display: 'flex',
        gap: '1rem',
        marginTop: '1rem'
    },
    socialIcon: {
        display: 'inline-block',
        width: '35px',
        height: '35px',
        backgroundColor: '#333',
        borderRadius: '50%',
        textAlign: 'center',
        lineHeight: '35px',
        color: 'white',
        textDecoration: 'none',
        transition: 'background-color 0.3s, transform 0.3s',
        fontSize: '1.2rem'
    },
    bottom: {
        textAlign: 'center',
        padding: '1.5rem',
        borderTop: '1px solid #333',
        fontSize: '0.9rem',
        color: '#aaa'
    }
};

// Add hover effects
const styleSheet = document.createElement("style");
styleSheet.textContent = `
  .footer-link:hover {
    color: #ff6b6b !important;
    transform: translateX(5px);
  }
  .social-icon:hover {
    background-color: #ff6b6b !important;
    transform: translateY(-3px);
  }
`;
document.head.appendChild(styleSheet);

export default Footer;