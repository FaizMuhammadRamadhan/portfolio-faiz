import Card from "../elements/Card";
import Desc from "../elements/Desc";
import SubTitle from "../elements/SubTitle";
import Title from "../elements/Title";

const CardIndex = ({title, subTitle, desc, children, cardVariant, titleVariant, subTitleVariant, descVariant}) => {
  return (
    <>
      <Card variant={cardVariant}>
        <Title variant={titleVariant}>{title}</Title>
        <SubTitle variant={subTitleVariant}>{subTitle}</SubTitle>
        <Desc variant={descVariant}>
          {desc}
        </Desc>
        {children}
      </Card>
    </>
  );
};

export default CardIndex;
