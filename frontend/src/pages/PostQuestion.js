import React from "react";
import Layout from "../components/Layout";
import Breadcrumb from "../components/Breadcrumb";
import PostQuestionForm from "../components/PostQuestionForm";

function HowItWorks() {
  const congif = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  };
  return (
    <Layout>
      <Breadcrumb pageTitle="Soru Sor" />
      <div className="container question-page">
        <PostQuestionForm />
      </div>
    </Layout>
  );
}

export default HowItWorks;
