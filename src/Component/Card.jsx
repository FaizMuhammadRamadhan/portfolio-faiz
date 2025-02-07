const Card = ({ children, variant, variantt}) => {
  return (
    <div>
      <div className={` text-black ${variant} py-4 flex flex-col justify-between rounded-lg`}>
        <p className={`text-justify ${variantt}`}>
          {children}
        </p>
      </div>
    </div>
  );
};

export default Card;
