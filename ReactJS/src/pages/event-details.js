import SEO from '../components/seo';
import Wrapper from '../layout/wrapper';
import EventDetailsMain from '../components/event-details';

const EventDetails = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Event Details'} />
      <EventDetailsMain/>
    </Wrapper>
  );
};

export default EventDetails;