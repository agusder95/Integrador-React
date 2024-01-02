import { CenterDummy, DummyWrapper, ImgDummyContainer } from "./styles";
import Layout from "../../components/layout";
import ScrollToTop from "../../components/ScrollToTop";
import Construction from "../../assets/images/Construction.jpg";
import Image from "../../components/Image";
const Dummy = () => {
  ScrollToTop();

  return (
    <DummyWrapper>
      <Layout>
        <CenterDummy>
          <h1>We are working on it</h1>
          <ImgDummyContainer>
            <Image src={Construction} alt={"Construction"} />
          </ImgDummyContainer>
        </CenterDummy>
      </Layout>
    </DummyWrapper>
  );
};

export default Dummy;
