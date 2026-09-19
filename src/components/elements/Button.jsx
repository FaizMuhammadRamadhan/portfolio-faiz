const Button = ({ children, variant = 'bg-black py-2 px-4', onClick, ...props }) => {
    return (
        <button className={variant} onClick={onClick} {...props}>
            {children}
        </button>
    );
}

export default Button;