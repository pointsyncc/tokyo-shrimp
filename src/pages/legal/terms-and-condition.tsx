import { MainLayout } from '@/components/layout/mainLayout/MainLayout';
import React from 'react';
import { NextPageWithLayout } from './_app';

const TermsAndCondition:NextPageWithLayout  = () => {
  return <div>Terms And Condition</div>;
};

TermsAndCondition.getLayout = function getLayout(page) {
    return <MainLayout showFooter>{page}</MainLayout>;
  };

export default TermsAndCondition;
