import { Link } from 'react-router-dom';
import SEO from '../components/seo';
import Footer from '../layout/footers/footer';
import Header from '../layout/headers/header';
import Wrapper from '../layout/wrapper';

const ErrorPage = () => {
  return (
    <Wrapper>
      {/* seo start */}
      <SEO pageTitle={'404 Page'} />
      {/* seo end */}

      {/* header start */}
      <Header header_shadow={true} />
      {/* header end */}

      {/* error start */}
      <section className="error__area pt-200 pb-200">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 offset-xxl-2 col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
              <div className="error__item text-center">
                <div className="error__thumb mb-45">
                  <img src="assets/img/error/error.png" alt="" />
                </div>
                <div className="error__content">
                  <h3 className="error__title">Page Not Found!</h3>
                  <p>Please try searching for some other page.</p>
                  <Link to="/" className="e-btn e-btn-3 e-btn-4">Back To Home</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* error end */}

      {/* footer area start */}
      <Footer pt="pt-90" />
      {/* footer area end */}
    </Wrapper>
  );
};

export default ErrorPage;