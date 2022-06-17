import { filterNote } from '../redux/notes/notesSlice';

import { variables } from '../themes/variables';

import styled from 'styled-components';
import { useDispatch } from 'react-redux';


export default function Search() {
  const dispatch = useDispatch();

  const handleFilter = (e) => {
    dispatch(filterNote(e.target.value));
  }
  return (
    <Container>
      <Input placeholder="Search" onChange={handleFilter} />
    </Container>
  )
}


const Container = styled.section`
margin-top: 20px;
display: flex;
align-items: center;
justify-content: center;
`;


const Input = styled.input`
border-radius: 20px;
font-size: ${variables.fontSize.f_size_sm};
padding: 10px 15px;
&::placeholder{
  font-weight: ${variables.fontWeight.f_weight_md};
  font-size: ${variables.fontSize.f_size_sm};
  opacity: 0.7;
}
`;