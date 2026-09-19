import { Link } from "react-router-dom";
import { sertifikat } from "../../data/sertifikat";
import HeaderTitle from "../elements/projects/HeaderTitle";
import CardIndex from "../fragments/CardIndex";
const Certificate = () => {
  return (
    <>
      <div id="certificates" className="bg-black py-10">
        <HeaderTitle
          changeTitleStyle={true}
          Titlee={"Sertifikasi"}
          SubTitle={"Bukti Belajar"}
        />
        <div className="grid grid-cols-3 mx-20">
          {sertifikat.map((item) => (
            <CardIndex
              key={item.id}
              title={item.title}
              subTitle={item.provider}
              desc={item.date}
            >
              <Link
                to={item.link}
                className="text-white bg-black w-fit py-1 px-3 rounded"
              >
                Check Certificate
              </Link>
            </CardIndex>
          ))}
        </div>
      </div>
    </>
  );
};

export default Certificate;
