const Card2 = ({title, children, variant, variantt}) => {
  return (
    <div>
      <div
        className={`bg-slate-200 text-black ${variant} px-3 py-4 flex flex-col justify-between rounded-lg`}
      >
        <h1 className={`font-bold ${variant} text-2xl`}>{title}</h1>
        <p className={`text-justify ${variantt}`}>{children}</p>
        <button className="text-sm absolute ml-60 md:ml-70 mt-14 bg-black text-white px-3 py-1 rounded-sm cursor-pointer">Check</button>
      </div>
    </div>
  );
};

export default Card2;
