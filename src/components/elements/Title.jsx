const Title = ({ children, variant = "" }) => {
  return (
    <h1 className={variant}>
      {children}
    </h1>
  );
};

export default Title;