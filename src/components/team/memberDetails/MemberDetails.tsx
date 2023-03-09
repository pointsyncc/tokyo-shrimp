import { SplitCome } from '@/components/common/animations/SplitCome';
import Image from '@/components/ui/image/Image';
import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
const MemberDetails = () => {
  return (
    <section className='team__detail'>
      <div className='container line pb-140'>
        <div className='line-3'></div>
        <div className='row'>
          <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-8 offset-lg-0 offset-md-2'>
            <div className='team__member-img'>
              <Image src='/imgs/team/detail.jpg' alt='Team Member Picture' data-speed='0.5' />
            </div>
          </div>
          <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-12'>
            <div className='sec-title-wrapper pt-120'>
              <SplitCome>
                <h2 className='team__member-name-7 animation__char_come'>
                  Jassica <br />
                  Oliver
                </h2>
              </SplitCome>
              <SplitCome>
                <h3 className='team__member-role-7 animation__char_come'>
                  UX Researcher and Instructor, at
                  <span>Axtra</span>
                </h3>
              </SplitCome>

              <p>
                Jassica Oliver is known for her ability to take a creative brief and run with it,
                coming back with fresh ideas and a perfectly built design file every time. From
                digital design to long-format layouts, she blends beautiful and intuitive with each
                project she touches. She also happens to be the queen of deadline-crushing, all
                while maintaining a can-do, Zen attitude that keeps the whole Statement team
                centered.
              </p>
              <p>
                When he’s not building strong alliances with other creatives, project managers and
                stakeholders alike, you’ll find him giving voice to client strategies with fresh,
                compelling concepts and delightfully clever messaging.
              </p>
            </div>
            <div className='team__member-work'>
              <h4 className='work-title'>Portfolio :</h4>
              <ul>
                <li>
                  <a href='#'>Behance</a>
                </li>
                <li>
                  <a href='#'>Dribble</a>
                </li>
                <li>
                  <a href='#'>Meduim</a>
                </li>
              </ul>
            </div>
            <div className='team__member-social'>
              <h4 className='work-title'>Follow :</h4>
              <ul>
                <li>
                  <a href='#'>
                    <span>
                      <FaFacebookF />
                    </span>
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <span>
                      <FaTwitter />
                    </span>
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <span>
                      <FaInstagram />
                    </span>
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <span>
                      <FaLinkedin />
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MemberDetails;
