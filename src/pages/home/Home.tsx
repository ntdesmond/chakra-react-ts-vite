import styled, { keyframes } from 'styled-components';
import Header from '../../components/layout/Header';
import PageBody from '../../components/layout/PageBody';
import Main from '../../components/layout/Main';
import MainMessage from './components/MainMessage';
import AnimatedIcon from './components/AnimatedIcon';

const Home = () => (
  <PageBody>
    <Header>
      Web application template
    </Header>
    <Main>
      <MainMessage>Hello world!</MainMessage>
      <AnimatedIcon>🐳💨</AnimatedIcon>
    </Main>
    <footer>
      Source code available at <a href="https://github.com/ntdesmond/styled-react-ts-vite">GitHub</a>!
    </footer>
  </PageBody>
);

export default Home;
