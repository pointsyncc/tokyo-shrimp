import { SplitCome } from '@/components/common/animations/SplitCome';
import Image from '@/components/ui/image/Image';
import { Trans, useTranslation } from 'next-i18next';
import readingTime from 'reading-time';
import { render } from 'storyblok-rich-text-react-renderer';

export interface BlogDetailProps {
  title: string;
  date: string;
  author: string;
  image: string;
  content: string;
  teaser?: string;
}

export const BlogDetail = ({ title, date, author, image, content }: BlogDetailProps) => {
  const { t } = useTranslation(['blog', 'common']);

  const testText =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultrices aliquam, nisl nisl aliquet nisl, nec aliquet nisl nisl sit amet lorem. Sed euismod, nisl nec ultrices aliquam, nisl nisl aliquet nisl, nec aliquet nisl nisl sit amet lorem.';

  const stats = readingTime(content);

  const readTime = '5';

  return (
    <section className='blog__detail'>
      <div className='container g-0 line pt-140'>
        <span className='line-3'></span>
        <div className='row'>
          <div className='col-xxl-8 col-xl-10 offset-xxl-2 offset-xl-1'>
            <div className='blog__detail-top'>
              <SplitCome type='words'>
                <h2 className='blog__detail-date animation__word_come'>
                  Design, Marketing <span>{date}</span>
                </h2>

                <h1 className='blog__detail-title animation__word_come'>{title}</h1>
              </SplitCome>
              <div className='blog__detail-metalist'>
                <div className='blog__detail-meta'>
                  <Image
                    className='rounded-circle'
                    priority={true}
                    raw={true}
                    width={50}
                    height={50}
                    src={`https://ui-avatars.com/api/?name=${author}&background=0D8ABC&color=fff`}
                    alt={`Blog about ${title} written by ${author}`}
                  />

                  <p>
                    {t('blog.written-by', { ns: 'blog' })}: <span>{author}</span>
                  </p>
                </div>
                {/* <div className='blog__detail-meta'>
                  <p>
                    {t('blog.read-time', { ns: 'blog' })}: <span>{stats.words} min</span>
                  </p>
                </div> */}
              </div>
            </div>
          </div>
          <div className='col-xxl-12'>
            <div className='blog__detail-thumb'>
              <Image
                src={image}
                alt={`Blog about ${title} written by ${author}`}
                data-speed='0.5'
              />
            </div>
          </div>
          <div className='col-xxl-8 col-xl-10 offset-xxl-2 offset-xl-1'>
            <div className='blog__detail-content'>
              {/* <p>
                We love to bring designs to life as a developer, and I aim to do this using whatever
                front end tools are necessary. My preferred tools are more modern javascript
                libraries like React.js but I like to use whatever is best for the websites needs.
                There are several reasons why a business would consider a rebrand and it doesn’t
                necessarily mean the business has been unsuccessful.{' '}
              </p>
              <p>
                But in order that you may see whence all this born error of those who accuse
                pleasure and praise pain, I will open the whole matter, and explain the very things
                which were said by that discoverer of truth and, as it were, the architect of a
                happy life.
              </p>
              <Image src='/imgs/blog/detail/2.jpg' alt='Blog Image' />

              <h2>JavaScript</h2>
              <p>
                We love to bring designs to life as a developer, and I aim to do this using whatever
                front end tools are necessary. My preferred tools are more modern javascript
                libraries like React.js but I like to use whatever is best for the websites needs.
                There are several reasons why a business would consider a rebrand and it doesn’t
                necessarily mean the business has been unsuccessful.
              </p>
              <h2>Fremework</h2>
              <p>
                Always ready to push the boundaries, especially when it comes to our own platform,
                Our analytical eye to create a site that was visually engaging and also optimised
                for maximum performance. It also perfectly reflects the journey to help it tell a
                story to increase its understanding and drive action. To create a site that was
                visually engaging for maximum performance.
              </p>
              <ul>
                <li>Brand Development</li>
                <li>UX/UI Design</li>
                <li>Front-end Development</li>
                <li>Copywriting</li>
                <li>Shopify Development</li>
              </ul>
              <h2>Visual Studio</h2>
              <p>
                Just like other pseudo-elements and pseudo-className selectors, :not() can be
                chained with other pseudo-classNamees and pseudo-elements. For example, the
                following will add a “New!” word to list items that do not have a .old className
                name, using the ::after pseudo-element:
              </p>
              <Image src='/imgs/blog/detail/3.jpg' alt='Code' /> */}

              {/* BLOG CONTENT */}
              {render(content)}
            </div>
            <div className='blog__detail-tags'>
              <p className='sub-title-anim'>
                tags: <a href='tag.html'>design</a>, <a href='tag.html'>figma</a>,
                <a href='tag.html'>update</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
