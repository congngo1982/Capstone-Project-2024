import React from 'react';
import { useParams } from 'react-router-dom';
import EventBreadcrumb from '../components/common/breadcrumb/event-breadcrumb';
import Cta from '../components/common/cta/cta';
import EventDetailsArea from '../components/event-details/event-details-area';
import SEO from '../components/seo';
import { EventData } from '../data';
import Footer from '../layout/footers/footer';
import Header from '../layout/headers/header';
import Wrapper from '../layout/wrapper';

const DynamicEventDetails = () => {
  const { id } = useParams();
  const event = EventData.find(e => Number(e.id) === Number(id))
  return (
    <Wrapper>
      {/* seo start */}
      <SEO pageTitle={'Event Details'} />
      {/* seo end */}

      {/* header start */}
      <Header header_shadow={true} />
      {/* header end */}

      {/* event breadcrumb start */}
      <EventBreadcrumb event={event} />
      {/* event breadcrumb end */}

      {/* event details area start */}
      <EventDetailsArea event={event} />
      {/* event details area end */}

      {/* cta start */}
      <Cta />
      {/* cta end */}

      {/* footer start */}
      <Footer />
      {/* footer end */}

    </Wrapper>
  );
};

export default DynamicEventDetails;