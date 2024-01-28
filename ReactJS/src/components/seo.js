import React from 'react';
import { Helmet } from "react-helmet-async";

const SEO = ({ pageTitle }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{pageTitle} || Online Learning and Education React Template </title>
        <meta name="robots" content="noindex, follow" />
        <meta name="description" content="Zibber - Consulting React Template" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      </Helmet>
    </>
  );
};

export default SEO;