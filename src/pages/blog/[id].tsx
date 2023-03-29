import { BlogDetail } from '@/components/blog/blogDetail/BlogDetail';
import RelatedBlog from '@/components/blog/relatedBlog/RelatedBlog';
import CTA from '@/components/common/CTA';
import { MainLayout } from '@/components/layout/mainLayout/MainLayout';
import React from 'react';
import { NextPageWithLayout } from '../_app';

const SingleBlog: NextPageWithLayout = () => {
  return (
    <>
      <BlogDetail/>
      <RelatedBlog />
      <CTA />
    </>
  );
};

SingleBlog.getLayout = function getLayout(page) {
  return <MainLayout showFooter>{page}</MainLayout>;
};

export default SingleBlog;
