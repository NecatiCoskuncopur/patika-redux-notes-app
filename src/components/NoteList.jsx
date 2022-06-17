import { deleteNote } from '../redux/notes/notesSlice';

import { variables } from '../themes/variables';

import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { AiOutlineClose } from 'react-icons/ai'



export default function NoteList() {
  const notes = useSelector(state => state.notes.items);
  const search = useSelector(state => state.notes.filtered.toLowerCase());

  const dispatch = useDispatch()

  let filteredItem = search ? notes.filter((note) => note.title.toLowerCase().includes(search)) : notes;
  return (
    <div>
      <List>
        {
          filteredItem && filteredItem.map((item) => (
            <ListItem key={item.id} style={{ backgroundColor: `${item.color}` }} >
              <Wrapper>
                <Title>{item.title}</Title>
                <Button onClick={() => dispatch(deleteNote(item.id))}>
                  <AiOutlineClose />
                </Button>
              </Wrapper>
              <div>
                <Text>{item.text}</Text>
              </div>
            </ListItem>
          ))
        }
      </List>
    </div>
  )
}


const List = styled.ul`
width: 50%;
margin: auto;
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-column-gap: 30px;
grid-row-gap: 30px;
margin-bottom: 30px;
@media(max-width: 680px){
  width: 100%;
  padding: 0 20px;
} 
@media(max-width: 480px){
  grid-template-columns: repeat(1, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
} 
`;


const ListItem = styled.li`
color: ${variables.color.base};
word-wrap: break-word;
overflow: hidden;
`;


const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 15px 20px;
`;


const Button = styled.button`
background-color: inherit;
cursor: pointer;
color: ${variables.color.base};
`;


const Title = styled.h3`
font-size: ${variables.fontSize.f_size_lg};
font-weight: ${variables.fontWeight.f_weight_bold};
text-transform: capitalize;
`;


const Text = styled.p`
padding: 0 10px 15px 20px;
font-size: ${variables.fontSize.f_size_sm};
font-weight: ${variables.fontWeight.f_weight_md};
letter-spacing: 1px;
`;