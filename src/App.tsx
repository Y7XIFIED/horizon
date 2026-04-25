import { Presentation } from './components/Presentation';
import { AnalyticsSlide } from './slides/AnalyticsSlide';
import { CoverSlide } from './slides/CoverSlide';
import { IntroSlide } from './slides/IntroSlide';
import { OutroSlide } from './slides/OutroSlide';
import { QuoteSlide } from './slides/QuoteSlide';

function App() {
  const slides = [<CoverSlide />, <IntroSlide />, <AnalyticsSlide />, <QuoteSlide />, <OutroSlide />];
  return <Presentation slides={slides} />;
}

export default App;

