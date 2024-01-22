import { EventData } from '../../data';
import Footer from '../../layout/footers/footer';
import Header from '../../layout/headers/header';
import EventBreadcrumb from '../common/breadcrumb/event-breadcrumb';
import Cta from '../common/cta/cta';
import EventDetailsArea from './event-details-area';

const index = () => {

  return (
    <>
      {/* header start */}
      <Header header_shadow={true} />
      {/* header end */}

      {/* event breadcrumb start */}
      <EventBreadcrumb event={EventData[0]} />
      {/* event breadcrumb end */}

      {/* event details area start */}
      <EventDetailsArea event={EventData[0]} />
      {/* event details area end */}

      {/* cta start */}
      <Cta />
      {/* cta end */}

      {/* footer start */}
      <Footer />
      {/* footer end */}
    </>
  );
};

export default index;