const Text = (props) => {
  const { children = "...", variant = "text-white" } = props;
  return <h2 className={variant}>{children}</h2>;
};

export default Text;
