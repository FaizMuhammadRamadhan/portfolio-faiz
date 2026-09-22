import { Link } from "react-router-dom";
import { sertifikat } from "../../data/sertifikat";
import HeaderTitle from "../elements/projects/HeaderTitle";
import CardIndex from "../fragments/CardIndex";

const Certificate = () => {
  return (
    <div id="certificates" className="bg-black py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 sm:mb-12">
          <HeaderTitle
            changeTitleStyle={true}
            Titlee={"CREDENTIALS & LEARNING"}
            SubTitle={"Certifications"}
            Desce={"Formal certifications and verified skills achieved through structured technical courses and professional training platforms."}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {sertifikat.map((item) => (
            <CardIndex
              key={item.id}
              title={item.title}
              subTitle={item.provider}
              desc={item.date}
            >
              <div className="mt-4">
                <Link
                  to={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-white bg-slate-900 border border-slate-700 hover:border-teal-400 hover:text-teal-300 px-4 py-2 rounded text-sm font-medium transition-colors duration-300"
                >
                  Check Certificate
                </Link>
              </div>
            </CardIndex>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificate;
