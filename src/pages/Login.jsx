import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        name: ''
    });
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simple validation - in real app, connect to backend
        if (formData.email && formData.password) {
            localStorage.setItem('user', JSON.stringify({ email: formData.email }));
            navigate('/');
        } else {
            alert('Please fill all fields');
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.formContainer}>
                <div style={styles.toggleButtons}>
                    <button
                        onClick={() => setIsLogin(true)}
                        style={{ ...styles.toggleBtn, ...(isLogin && styles.activeToggle) }}
                    >
                        Login
                    </button>
                    <button
                        onClick={() => setIsLogin(false)}
                        style={{ ...styles.toggleBtn, ...(!isLogin && styles.activeToggle) }}
                    >
                        Sign Up
                    </button>
                </div>

                <form onSubmit={handleSubmit} style={styles.form}>
                    {!isLogin && (
                        <input
                            type="text"
                            placeholder="Full Name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            style={styles.input}
                            required
                        />
                    )}

                    <input
                        type="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        style={styles.input}
                        required
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        style={styles.input}
                        required
                    />

                    <button type="submit" style={styles.submitBtn}>
                        {isLogin ? 'Login' : 'Create Account'}
                    </button>
                </form>

                {isLogin && (
                    <p style={styles.forgotPassword}>Forgot Password?</p>
                )}
            </div>
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '80vh',
        padding: '20px'
    },
    formContainer: {
        backgroundColor: 'white',
        padding: '2rem',
        borderRadius: '10px',
        boxShadow: '0 0 20px rgba(0,0,0,0.1)',
        width: '100%',
        maxWidth: '400px'
    },
    toggleButtons: {
        display: 'flex',
        gap: '1rem',
        marginBottom: '2rem'
    },
    toggleBtn: {
        flex: 1,
        padding: '0.75rem',
        border: 'none',
        backgroundColor: '#f0f0f0',
        cursor: 'pointer',
        fontSize: '1rem',
        borderRadius: '5px'
    },
    activeToggle: {
        backgroundColor: '#1a1a1a',
        color: 'white'
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem'
    },
    input: {
        padding: '0.75rem',
        border: '1px solid #ddd',
        borderRadius: '5px',
        fontSize: '1rem'
    },
    submitBtn: {
        padding: '0.75rem',
        backgroundColor: '#ff6b6b',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '1rem',
        fontWeight: 'bold'
    },
    forgotPassword: {
        textAlign: 'center',
        marginTop: '1rem',
        color: '#666',
        cursor: 'pointer'
    }
};

export default Login;