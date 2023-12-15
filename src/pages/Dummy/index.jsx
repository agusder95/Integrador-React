import React, { useEffect, useState } from "react";
import { CenterDummy, DummyWrapper } from "./styles";
import Layout from "../../components/layout";
import Center from "../../components/Center";
import ScrollToTop from "../../components/ScrollToTop";
import useApi from "../../state/hooks/useApi";

const Dummy = () => {
  ScrollToTop();

  const { data, loading, error } = useApi("/products/categories");
  
  const [importData, setImportData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [title, setTitle] = useState([]);
  useEffect(() => {
    if (data) {
      setCategories(data);
    }
  }, [loading]);

  /* useEffect(() => {
    if(importData.length !== 0) {
      importData.map((product) => {
        setCategories(product.category)
      })
    }
    
  }, [importData]); */

  return (
    <DummyWrapper>
      <Layout>
        <CenterDummy>
          <h1>We are working on it</h1>
          <ul>
           {categories.length === 0 ? '':
              categories.flatMap((item, index) => (
                <li key={index}>{item}</li>
              ))
            }
          </ul>
        </CenterDummy>
      </Layout>
    </DummyWrapper>
  );
};

export default Dummy;
