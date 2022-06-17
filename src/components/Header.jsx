import { variables } from '../themes/variables';

import styled from 'styled-components';


export default function Header() {
  return (
    <Container>
      <Title>NotesApp</Title>
    </Container>
  )
}


const Container = styled.header`
display: flex;
align-items: center;
justify-content: center;
margin-top: 20px;
`;


const Title = styled.h1`
font-size: ${variables.fontSize.f_size_xl};
opacity: 0.3;
`;