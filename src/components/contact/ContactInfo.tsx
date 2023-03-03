import React from 'react';

const ContactInfo = () => {
  return (
    <div className='col-xxl-5 col-xl-5 col-lg-5 col-md-5'>
      <div className='contact__info'>
        <h3 className='sub-title-anim-top animation__word_come'>
          Don&apos;t be afraid man ! <br />
          say hello
        </h3>
        <ul>
          <li>
            <a className='d-inline' href='tel:+(2)578365379'>
              +385 99 2144 802
            </a>
          </li>
          <li>
            <a className='d-inline' href='mailto:hello@example.com'>
              info@pointsyncc.com
            </a>
          </li>
          <li>
            <span>
              Ulica Mokrice 12, 10382 Donja Zelina
              <br /> Croatia
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactInfo;
