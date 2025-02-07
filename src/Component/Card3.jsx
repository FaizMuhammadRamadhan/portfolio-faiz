const Card3 = ({variant}) => {
  return (
    <div className={`flex ${variant} absolute justify-center items-center`}>
      <div className="flex flex-col gap-2 p-2 rounded-md">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="w-10 h-10 bg-black"></div>
        ))}
      </div>
    </div>
  );
};

export default Card3;
