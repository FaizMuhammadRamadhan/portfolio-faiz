const Desc = ({ children, variant = "text-slate-600 leading-relaxed text-base flex-1" }) => {
  return (
    <p className={variant}>
      {children}
    </p>
  );
};

export default Desc;