import { MainLayout } from '@/components/layout/mainLayout/MainLayout';
import React from 'react';
import { NextPageWithLayout } from './_app';

const PrivacyPolicy: NextPageWithLayout = () => {
  return <div>Privacy and policy</div>;
};

PrivacyPolicy.getLayout = function getLayout(page) {
  return <MainLayout showFooter>{page}</MainLayout>;
};

export default PrivacyPolicy;
