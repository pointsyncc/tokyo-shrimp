import {SplitCome} from '@/components/common/animations/SplitCome';
import Image from '@/components/ui/image/Image';
import React from 'react';

const Solution = () => {
  return (
    <section className='solution__area'>
      <div className='container hero-line'></div>
      <div className='solution__wrapper'>
        <div className='solution__left'>
          <div className='solution__img-1'>
            <Image priority={true} style={{height:'auto'}} raw={true} width={435} height={472} src='/imgs/thumb/solution.png' alt='Solution Image' />
          </div>
          <div className='solution__img-2'>
          <Image priority={true} style={{height:'auto'}} raw={true} width={220} height={344} src='/imgs/thumb/solution-2.png' alt='Solution Image' />
            {/* <img src='/imgs/thumb/solution-2.png' alt='Solution Image' /> */}
          </div>
        </div>

        <div className='solution__mid'>
          <SplitCome>
          <h1 className='solution__title animation__char_come animation-char'>Digital Solution</h1>
          </SplitCome>
    
          <p>
            We’re designing digital experiences that enrich human lives and it helps to grow your
            business globally trends.
          </p>
        </div>

        <div className='solution__right'>
          <div className='solution__img-3'>
          <Image priority={true} style={{height:'auto'}} raw={true} width={459} height={414} src='/imgs/thumb/solution-3.png' alt='Solution Image'  />
            {/* <img src='/imgs/thumb/solution-3.png' alt='Solution Image' /> */}
          </div>
        </div>
      </div>

      <div className='container pb-130'>
        <div className='row'>
          <div className='col-xxl-12'>
            <div className='solution__btm'>
              <ul>
                <li>Approch</li>
                <li>Creativity</li>
                <li>Experienced</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className='solution__shape'>
        <Image priority={true} raw={true} width={41} height={23} src='/imgs/icon/1.png' alt='Shape Image' className='shape-1'/>
        {/* <img src='/imgs/icon/1.png' alt='Shape Image' className='shape-1' /> */}
        {/* <img src='/imgs/icon/2.png' alt='Shape Image' className='shape-2' /> */}
        <Image priority={true} raw={true} width={22} height={20} src='/imgs/icon/2.png' alt='Shape Image' className='shape-2'/>
        {/* <img src='/imgs/icon/3.png' alt='Shape Image' className='shape-3' /> */}
        <Image priority={true} raw={true} width={38} height={38} src='/imgs/icon/3.png' alt='Shape Image' className='shape-3'/>

        {/* <img src='/imgs/icon/4.png' alt='Shape Image' className='shape-4' /> */}
        <Image priority={true} raw={true} width={62} height={110} src='/imgs/icon/4.png' alt='Shape Image' className='shape-4'/>
        {/* <img src='/imgs/icon/5.png' alt='Shape Image' className='shape-5' /> */}
        <Image priority={true} raw={true} width={94} height={93} src='/imgs/icon/5.png' alt='Shape Image' className='shape-5'/>
      </div>
    </section>
  );
};

export default Solution;
