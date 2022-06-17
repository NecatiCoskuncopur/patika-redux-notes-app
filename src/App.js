import Header from './components/Header';
import Search from './components/Search';
import Form from './components/Form';
import NoteList from './components/NoteList';
import { GlobalStyle } from './themes/GlobalStyle';

import styled from 'styled-components';


function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Header />
        <Search />
        <Form />
        <NoteList />
      </Container>
    </>
  );
}

export default App;


const Container = styled.main`
display: flex;
flex-direction: column;
justify-content: center;
max-width: 1200px;
margin: auto;
`