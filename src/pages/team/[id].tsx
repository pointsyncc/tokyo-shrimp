import CTA from '@/components/common/CTA';
import { MainLayout } from '@/components/layout/mainLayout/MainLayout';
import MemberDetails from '@/components/team/memberDetails/MemberDetails';
import React from 'react';

import { NextPageWithLayout } from '../_app';

const TeamMember: NextPageWithLayout = () => {
  return (

      <div className='team__detail-page'>
        <MemberDetails />
        <CTA />
      </div>
 
  );
};

TeamMember.getLayout = function getLayout(page) {
  return <MainLayout showFooter>{page}</MainLayout>;
};

export default TeamMember;
