import React from 'react';
import './NotFoundPage.scss';
// @ts-ignore
import {Link} from "react-router";
import Layout from "../Layout";

const NotFoundPage = () => {
  return (
      <Layout id="layout">
          Страница не найдена! <Link to="/">Перейти на главная страницу...</Link>
      </Layout>
  );
};

export default NotFoundPage;
