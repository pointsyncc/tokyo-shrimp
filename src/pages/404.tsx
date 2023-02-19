import { MainLayout } from "@/components/layout/mainLayout/MainLayout";
import Head from "next/head";
import Link from "next/link";
import { NextPageWithLayout } from "./_app";

const Custom404: NextPageWithLayout = () => {
  return (
    <>
      <div className="has-smooth" id="has_smooth"></div>

      <button id="scroll_top" className="scroll-top">
        <i className="fa-solid fa-arrow-up"></i>
      </button>

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <section className="error__page">
              <div className="container line">
                <span className="line-3"></span>
                <div className="row">
                  <div className="col-xxl-12">
                    <div className="error__content">
                      <img src="imgs/thumb/404.png" alt="Page not found" />
                      <h2>Sorry! Page not found.</h2>
                      <p>
                        The page you are looking for doesn&apos;t exist or has
                        been moved.
                      </p>
                      <div className="btn_wrapper">
                        <Link
                          className="wc-btn-primary btn-hover btn-item"
                          href="/"
                        >
                          <span></span> Back to <br />
                          Homepage <i className="fa-solid fa-arrow-right"></i>
                        </Link>
                      </div>
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

Custom404.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export default Custom404;
