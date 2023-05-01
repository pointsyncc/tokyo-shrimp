
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { useTranslation } from 'next-i18next';
import Image from '../ui/image/Image';
import { Link } from '../ui/link/Link';
import SectionTitle from '../ui/sectionTitle/SectionTitle';

interface IProps {
  // showHeadingArea?: boolean;
  // transparentBg?: boolean;
  // noPaddingLeft?: boolean;
  alt?: boolean;
}
export const TeamSlider = ({
  alt = false,
}: // showHeadingArea = true,
// transparentBg = false,
// noPaddingLeft = false,
IProps) => {
  const slides = [
    {
      imgSrc: 'https://tokyo.fra1.cdn.digitaloceanspaces.com/projects%2Ftokyo-shrimp%2Fteam%2Fteam-kristijan-vidovic-432x550-upscaled.jpg',
      name: 'Kristijan',
      role: 'CEO & Software Developer',
    },
    {
      imgSrc: '/imgs/team/3.jpg',
      name: 'Haroon',
      role: 'Lead Frontend Developer',
    },
    {
      imgSrc: '/imgs/team/3.jpg',
      name: 'Ali',
      role: 'Lead Backend Developer',
    },
    {
      imgSrc: 'https://tokyo.fra1.cdn.digitaloceanspaces.com/projects/tokyo-shrimp/team/team-vedran-sredic-432x550-01.jpg',
      name: 'Vedran',
      role: 'CMO & Marketing Manager',
    },
    {
      imgSrc: 'https://tokyo.fra1.cdn.digitaloceanspaces.com/projects/tokyo-shrimp/team/pointsyncc-danijel-bilanovic-433x550-01.jpg',
      name: 'Danijel',
      role: 'CTO & QA Manager',
    },
    {
      imgSrc: '/imgs/team/5.jpg',
      name: 'Marko',
      role: 'Project Manager',
    },
    // {
    //   imgSrc: '/imgs/team/5.jpg',
    //   name: 'Monika',
    //   role: 'Social Media Manager',
    // },
    // {
    //   imgSrc: '/imgs/team/5.jpg',
    //   name: 'Ena',
    //   role: 'Social Media Expert',
    // },
    {
      imgSrc: '/imgs/team/5.jpg',
      name: 'Martina',
      role: 'Lector & Translator',
    },
    // {
    //   imgSrc: '/imgs/team/5.jpg',
    //   name: 'Marija',
    //   role: 'Financial Advisor',
    // },
  ];

  const {t} = useTranslation('common')

  return (
    <section className={`pt-140 pb-140 ${alt ? 'bg-transparent' : ''} ${alt ? '' : 'team__area'}`}>
      {!alt && (
        <div className='sec-title-wrapper'>
          {/* <h2 className='sec-sub-title title-anim'>{t('page.section.team.subtitle')}</h2> */}
          <SectionTitle>{t('page.section.team.title')}</SectionTitle>
        </div>
      )}

      <Splide
        className='team__slider'
        options={{
          arrows: false,
          pagination: false,
          gap: 30,
        //   focus: 'center',
          type: 'loop',
          drag: 'free',
          speed: 2000,
          perPage: 4,
          breakpoints: {
            640: {
              perPage: 2,
            },
            1000: {
              perPage: 3,
            },
            1200: {
              perPage: 4,
            },
          },
        }}
      >
        {slides.map((slide,i) => {
          return (
            <SplideSlide key={slide.name}>
              <Link href={`/team/${i + 1}`}>
                <Image src={slide.imgSrc} width={433} height={550} fill={false} alt='Team Member' />
                {/* <img className='img-fluid' src={slide.imgSrc} alt='Team Member' /> */}
                <div className='team__info'>
                  <h4 className={`team__member-name ${alt ? 'team__member-name-6' : ''}`}>
                    {slide.name}
                  </h4>
                  <h5 className={`team__member-role ${alt ? 'team__member-role-6' : ''}`}>
                    {slide.role}
                  </h5>
                </div>
              </Link>
            </SplideSlide>
          );
        })}
      </Splide>
    </section>
  );
};
