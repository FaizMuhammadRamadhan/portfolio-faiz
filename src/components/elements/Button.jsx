const Button = ({ children, variant = 'bg-black py-2 px-4', onClick }) => {
    return (
        <button className={variant} onClick={onClick}>
            {children}
        </button>
    );
}

export default Button;