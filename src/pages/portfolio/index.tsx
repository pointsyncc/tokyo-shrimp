import CTA from '@/components/common/CTA';
import { MainLayout } from '@/components/layout/mainLayout/MainLayout';
import FeaturedWork from '@/components/portfolio/featuredWork/FeaturedWork';
import PortfolioItem, {
  IPortfolioItemProps,
} from '@/components/portfolio/portfolioItem/PortfolioItem';
import Head from 'next/head';
import { useState } from 'react';
import { NextPageWithLayout } from '../_app';

const Portolio: NextPageWithLayout = () => {
  const [currentProjectNumber, setCurrentProjectNumber] = useState(1);

  const onVisibilityChange = (inView: boolean, id: string) => {
    if (inView) setCurrentProjectNumber(+id);
  };
  const portfolioItems: IPortfolioItemProps[] = [
    {
      id: '1',
      imgSrc: '/imgs/portfolio/6/1.jpg',
      title: 'Lionpro Agency',
      date: '02 May 2021',
    },
    {
      id: '2',
      imgSrc: '/imgs/portfolio/6/2.jpg',
      title: 'Lionpro Agency',
      date: '02 May 2021',
    },
    {
      id: '3',
      imgSrc: '/imgs/portfolio/6/3.jpg',
      title: 'Lionpro Agency',
      date: '02 May 2021',
    },
    {
      id: '4',
      imgSrc: '/imgs/portfolio/6/4.jpg',
      title: 'Lionpro Agency',
      date: '02 May 2021',
    },
    {
      id: '5',
      imgSrc: '/imgs/portfolio/6/5.jpg',
      title: 'Lionpro Agency',
      date: '02 May 2021',
    },
    {
      id: '6',
      imgSrc: '/imgs/portfolio/6/6.jpg',
      title: 'Lionpro Agency',
      date: '02 May 2021',
    },
    {
      id: '7',
      imgSrc: '/imgs/portfolio/6/7.jpg',
      title: 'Lionpro Agency',
      date: '02 May 2021',
    },
  ];

  return (
    <div>
      <Head>
        <title>Pointsyncc - Porfolio</title>
        <meta name='description' content='Portfolio' />
      </Head>

      <>
        <section className='portfolio__area-6'>
          <div className='container line pt-100 pb-140'>
            <span className='line-3'></span>
            <div className='zi-9 pt-5 pt-md-0'>
              <div className='row'>
                <div className='col-xxl-4 col-xl-5 col-lg-5 col-md-6'>
                  <FeaturedWork currentProjectNumber={currentProjectNumber} />
                </div>

                <div className='col-xxl-8 col-xl-7 col-lg-7 col-md-6'>
                  <div className='portfolio__wrapper-6'>
                    <div className='portfolio__list-6'>
                      {portfolioItems.map((item) => {
                        return (
                          <PortfolioItem
                            onVisibilityChange={onVisibilityChange}
                            key={item.id}
                            {...item}
                          />
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CTA />
      </>
    </div>
  );
};

Portolio.getLayout = function getLayout(page) {
  return <MainLayout showFooter>{page}</MainLayout>;
};

export default Portolio;
