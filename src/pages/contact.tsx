import { MainLayout } from "@/components/layout/mainLayout/MainLayout";
import Head from "next/head";
import React from "react";
import { NextPageWithLayout } from "./_app";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { EMAIL_PATTERN } from "@/components/constants/constants";

const Contact: NextPageWithLayout = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <>
      <Head>
        <title>Pointsyncc - Contact</title>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="cursor1"></div>
      <div className="cursor2"></div>

      <div className="has-smooth" id="has_smooth"></div>

      <button id="scroll_top" className="scroll-top">
        <i className="fa-solid fa-arrow-up"></i>
      </button>

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <section className="contact__area-6">
              <div className="container g-0 line pt-120 pb-110">
                <span className="line-3"></span>
                <div className="row">
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                    <div className="sec-title-wrapper">
                      <h2 className="sec-title-2 animation__char_come">
                        Let’s get in touch
                      </h2>
                    </div>
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                    <div className="contact__text">
                      <p>
                        Great! We're excited to hear from you and let's start
                        something special togerter. call us for any inquery.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row contact__btm">
                  <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
                    <div className="contact__info">
                      <h3 className="sub-title-anim-top animation__word_come">
                        Don't be afraid man ! <br />
                        say hello
                      </h3>
                      <ul>
                        <li>
                          <a href="tel:+(2)578365379">+385 99 2144 802</a>
                        </li>
                        <li>
                          <a href="mailto:hello@example.com">
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
                  <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
                    <div className="contact__form">
                      <form
                        className="contact__form-2"
                        onSubmit={handleSubmit(onSubmit)}
                      >
                        <div className="row g-3">
                          <div className="col-xxl-6 col-xl-6 col-12">
                            <input
                              type="text"
                              placeholder="Name *"
                              {...register("name", {
                                required: "Name is required",
                                maxLength: 10,
                              })}
                            />
                            <ErrorMessage errors={errors} name="name" render={({ message }) => <p className="form__error__message">{message}</p>} />
                          </div>
                          <div className="col-xxl-6 col-xl-6 col-12">
                            <input
                              type="email"
                              placeholder="Email *"
                              {...register("email", {
                                required: "Email is required",
                                //email pattern
                                pattern: {
                                  value: EMAIL_PATTERN,
                                  message: "Invalid email address",
                                },
                              })}
                            />
                            <ErrorMessage errors={errors} name="email" render={({ message }) => <p className="form__error__message">{message}</p>} />
                          </div>
                        </div>
                        <div className="row g-3">
                          <div className="col-xxl-6 col-xl-6 col-12">
                            <input
                              type="tel"
                              placeholder="Phone"
                              {...register("phone", {
                                required: "Phone is required",
                                pattern: {
                                  value: /^[0-9]*$/,
                                  message: "Invalid phone number",
                                },
                              })}
                            />
                            <ErrorMessage errors={errors} name="phone" render={({ message }) => <p className="form__error__message">{message}</p>} />
                          </div>
                          <div className="col-xxl-6 col-xl-6 col-12">
                            <input
                              type="text"
                              placeholder="Subject *"
                              {...register("subject", {
                                required: "Subject is required",
                              })}
                            />
                             <ErrorMessage errors={errors} name="subject" render={({ message }) => <p className="form__error__message">{message}</p>} />
                          </div>
                        </div>
                        <div className="row g-3">
                          <div className="col-12">
                            <textarea
                              placeholder="Messages *"
                              {...register("message", {
                                required: "Message is required",
                              })}
                            ></textarea>
                            <ErrorMessage errors={errors} name="message" render={({ message }) => <p className="form__error__message">{message}</p>} />
                          </div>
                        </div>
                        <div className="row g-3">
                          <div className="col-12">
                            <div className="btn_wrapper">
                              <button className="wc-btn-primary btn-hover btn-item">
                                <span></span> Send <br />
                                Messages{" "}
                                <i className="fa-solid fa-arrow-right"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
};

Contact.getLayout = function getLayout(page) {
  return <MainLayout showFooter>{page}</MainLayout>;
};

export default Contact;
