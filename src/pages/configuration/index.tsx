import { MainLayout } from '@/components/layout/mainLayout/MainLayout';
import React from 'react'
import { NextPageWithLayout } from '../_app';

const Configuration: NextPageWithLayout = () => {
    return (
        <div>
            <h1>Configuration</h1>
        </div>
    )
}


Configuration.getLayout = function getLayout(page) {
    return <MainLayout showFooter>{page}</MainLayout>;
  };
  


export default Configuration;
