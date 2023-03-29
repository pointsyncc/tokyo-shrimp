import { Articles } from '@/components/blog/articles/Articles';
import CTA from '@/components/common/CTA';
import { MainLayout } from '@/components/layout/mainLayout/MainLayout';
import React from 'react';
import { NextPageWithLayout } from '../_app';

const Blog:NextPageWithLayout = () => {
  return (
    <>
      <Articles />
      <CTA />
    </>
  );
};

Blog.getLayout = function getLayout(page) {
    return <MainLayout showFooter>{page}</MainLayout>;
  };

export default Blog;
