import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import Breadcrumb from "../components/Breadcrumb";
import PageContent from "../components/PageContent";
import axios from "axios";
function StaticPage() {
  let { id } = useParams();
  const [page, setPage] = useState([]);
  function createMarkup(content) {
    return { __html: content };
  }
  useEffect(() => {
    axios
      .get(`/api/page/${id}`)
      .then((response) => {
        console.log(response.data);
        setPage(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Layout>
      {page.length !== 0 ? (
        <>
          <Breadcrumb pageTitle={page[0].title} />
          <PageContent>
            <h3>{page[0].title}</h3>
            <div
              className="dynamic-content"
              dangerouslySetInnerHTML={createMarkup(page[0].page_content)}
            />
          </PageContent>
        </>
      ) : null}
    </Layout>
  );
}

export default StaticPage;
