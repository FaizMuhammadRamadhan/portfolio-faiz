import Button from "../Button";
import Desc from "../Desc";
import SubTitle from "../SubTitle";
import Title from "../Title";

const BodyHome = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const hoverSlideStyle =
    "relative z-10 overflow-hidden bg-black text-white px-8 py-4 rounded font-medium transition-colors duration-300 " +
    "before:absolute before:left-0 before:top-0 before:w-full before:h-0 before:bg-teal-500 before:-z-10 " +
    "before:transition-all before:duration-300 before:ease-in-out hover:before:h-full hover:text-black ";

  const hoverSlideOutlineStyle =
    "relative z-10 overflow-hidden bg-transparent text-black px-8 py-4 rounded font-medium transition-all duration-300 border border-black hover:border-teal-500 " +
    "before:absolute before:left-0 before:top-0 before:w-full before:h-0 before:bg-teal-500 before:-z-10 " +
    "before:transition-all before:duration-300 before:ease-in-out hover:before:h-full hover:text-white";
  return (
    <>
      <div className="h-full w-full gap-y-8 flex flex-col pt-20 px-40">
        <Desc variant="text-teal-600 text-3xl">halo, saya -</Desc>
        <Title variant="text-7xl font-bold w-200">Faiz Muhammad Ramadhan</Title>
        <SubTitle variant="text-3xl text-gray-700">
          FullStack Web Developer
        </SubTitle>
        <Desc variant="text-gray-700 text-2xl w-180">
          Saya menghadirkan solusi web end-to-end berbasis stack modern. Mulai
          dari perancangan ERD dan pemrosesan query SQL yang efisien, membangun
          arsitektur server-side yang kokoh dengan Laravel/Express.js, hingga
          mengeksekusi antarmuka dinamis berbasis React/Next.js & Tailwind CSS.
          Dengan keahlian ini, saya siap membangun sistem yang tidak hanya
          tangguh dan cepat, tetapi juga mudah dikembangkan di masa depan.
        </Desc>
        <div className="flex gap-5 py-5">
          <Button
            onClick={() => scrollToSection("projects")}
            variant={hoverSlideStyle}
          >
            Lihat Project
          </Button>
          <Button onClick={() => scrollToSection("contact")} variant={hoverSlideOutlineStyle}>Hubungi Saya</Button>
        </div>
      </div>
    </>
  );
};
export default BodyHome;
