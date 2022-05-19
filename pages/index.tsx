import type { NextPage } from 'next';
import Layout from '../components/Layout';
import Navbar from '../components/NavBar';

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <Navbar />
      </Layout>
    </>
  );
};

export default Home;
