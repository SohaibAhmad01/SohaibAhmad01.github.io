import {Layout} from '../layout/Layout';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Experience from '../components/Experience/Experience';
import Approach from '../components/Approach/Approach';

const Home = () => {
  return (
    <Layout>
      <Hero />
      <Experience />
      <Approach />
      <Projects />
      <Technologies />
    </Layout>
  );
};

export default Home;
