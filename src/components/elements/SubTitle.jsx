const SubTitle = ({ children, variant = "text-sm font-semibold text-teal-500 uppercase tracking-wider" }) => {
  return (
    <h2 className={variant}>
      {children}
    </h2>
  );
};

export default SubTitle;