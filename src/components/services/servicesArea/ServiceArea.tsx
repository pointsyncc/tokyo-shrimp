import React from 'react';
import { Service } from '../service/Service';
import Image from '@/components/ui/image/Image';
const ServiceArea = () => {
  const services = [
    {
      imgSrc: '/imgs/service/1.jpg',
      title: 'Interaction Design',
      description:
        'This is the second workshop of the UX design methodology. Given all the conclusions drawn in the personae workshop, we will project ourselves towards the production of ideal user journeys. In other words: how each persona can achieve their goal.',
      subServices: [
        'API Development',
        'WordPress',
        'Cloud Migration',
        'Front End Development',
        'JavaScript',
        'Fluter Framework',
      ],
    },
    {
      imgSrc: '/imgs/service/2.jpg',
      title: 'Web & Mobile Development',
      description:
        'This is the second workshop of the UX design methodology. Given all the conclusions drawn in the personae workshop, we will project ourselves towards the production of ideal user journeys. In other words: how each persona can achieve their goal.',
      subServices: [
        'API Development',
        'WordPress',
        'Cloud Migration',
        'Front End Development',
        'JavaScript',
        'Fluter Framework',
      ],
    },
    {
      imgSrc: '/imgs/service/3.jpg',
      title: 'Motion & Branding Design',
      description:
        'This is the second workshop of the UX design methodology. Given all the conclusions drawn in the personae workshop, we will project ourselves towards the production of ideal user journeys. In other words: how each persona can achieve their goal.',
      subServices: [
        'API Development',
        'WordPress',
        'Cloud Migration',
        'Front End Development',
        'JavaScript',
        'Fluter Framework',
      ],
    },
    {
      imgSrc: '/imgs/service/4.jpg',
      title: 'Digital Maketing',
      description:
        'This is the second workshop of the UX design methodology. Given all the conclusions drawn in the personae workshop, we will project ourselves towards the production of ideal user journeys. In other words: how each persona can achieve their goal.',
      subServices: [
        'API Development',
        'WordPress',
        'Cloud Migration',
        'Front End Development',
        'JavaScript',
        'Fluter Framework',
      ],
    },
    {
      imgSrc: '/imgs/service/5.jpg',
      title: 'Concept & Strategy',
      description:
        'This is the second workshop of the UX design methodology. Given all the conclusions drawn in the personae workshop, we will project ourselves towards the production of ideal user journeys. In other words: how each persona can achieve their goal.',
      subServices: [
        'API Development',
        'WordPress',
        'Cloud Migration',
        'Front End Development',
        'JavaScript',
        'Fluter Framework',
      ],
    },
    {
      imgSrc: '/imgs/service/6.jpg',
      title: 'Illustrations & Prototype',
      description:
        'This is the second workshop of the UX design methodology. Given all the conclusions drawn in the personae workshop, we will project ourselves towards the production of ideal user journeys. In other words: how each persona can achieve their goal.',
      subServices: [
        'API Development',
        'WordPress',
        'Cloud Migration',
        'Front End Development',
        'JavaScript',
        'Fluter Framework',
      ],
    },
  ];
  return (
    <section className='service__area-6'>
      <div className='container'>
        <div className='row inherit-row'>
          <div className='col-xxl-12'>
            <div className='content-wrapper'>
              <div className='left-content'>
                <ul className='service__list-6'>
                  <li className='active'>
                    <a href='#service_1'>
                      Interaction <br />
                      Design
                    </a>
                  </li>
                  <li>
                    <a href='#service_2'>
                      Web & Mobile <br />
                      Development
                    </a>
                  </li>
                  <li>
                    <a href='#service_3'>
                      Motion & Branding <br />
                      Design
                    </a>
                  </li>
                  <li>
                    <a href='#service_4'>
                      Digital <br /> Maketing
                    </a>
                  </li>
                  <li>
                    <a href='#service_5'>
                      Concept and <br />
                      Strategy
                    </a>
                  </li>
                  <li>
                    <a href='#service_6'>
                      Illustrations & <br /> Prototype
                    </a>
                  </li>
                </ul>
              </div>

              <div className='mid-content'>
                {[1, 2, 3, 4, 5,4].map((imgNum) => {
                  return (
                    <div key={imgNum} className='service__image'>
                      <Image width={580} height={1000} raw={true}  src={`/imgs/service/${imgNum}.jpg`} alt='Service Image' />
                    </div>
                  );
                })}
                {/* <div className='service__image'>
                  <img src='/imgs/service/1.jpg' alt='Service Image' />
                </div>
                <div className='service__image'>
                  <img src='/imgs/service/2.jpg' alt='Service Image' />
                </div>
                <div className='service__image'>
                  <img src='/imgs/service/3.jpg' alt='Service Image' />
                </div>
                <div className='service__image'>
                  <img src='/imgs/service/4.jpg' alt='Service Image' />
                </div>
                <div className='service__image'>
                  <img src='/imgs/service/5.jpg' alt='Service Image' />
                </div>
                <div className='service__image'>
                  <img src='/imgs/service/4.jpg' alt='Service Image' />
                </div> */}
              </div>

              <div className='right-content'>
                <div className='service__items-6'>
                  {services.map((service, index) => {
                    return <Service id={(index + 1).toString()} key={service.title} {...service} />;
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceArea;
