import React from "react";
import { CenterDummy, DummyWrapper } from "./styles";
import Layout from "../../components/layout";
import Center from "../../components/Center";
import ScrollToTop from "../../components/ScrollToTop";

const Dummy = () => {
  ScrollToTop()
  return (
    <DummyWrapper>
      <Layout>
        <CenterDummy>
          <h1>We are working on it</h1>

        </CenterDummy>
      </Layout>
    </DummyWrapper>
  );
};

export default Dummy;
