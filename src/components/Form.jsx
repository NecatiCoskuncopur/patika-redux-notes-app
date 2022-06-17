import { useState } from 'react';

import { addNote } from '../redux/notes/notesSlice';

import { variables } from '../themes/variables';

import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { AiOutlineCheck } from 'react-icons/ai';


export default function Form() {
  const dispatch = useDispatch();
  const [color, setColor] = useState('');
  const [title, setTitle] = useState('');
  const [note, setNote] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!note || /^\s*$/.test(note) & !title || /^\s*$/.test(title) || color === '') {
      return false;
    }
    dispatch(addNote({ id: uuid(), title: title, text: note, color: color, }))
    setTitle('');
    setNote('');
    setColor('')
  };


  const handleColor = (e) => {
    setColor(e.target.id)
  }

  return (
    <NoteForm onSubmit={handleSubmit}>

      <TitleInput
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder='Title'
      />
      <NoteArea
        rows={8}
        value={note}
        placeholder='Add Note'
        maxLength={200}
        onChange={(e) => setNote(e.target.value)}
      />
      <BottomWrapper>
        <ColorWrapper>
          <Button
            id='Red'
            onClick={handleColor}
            type='button'
          >
            {color === 'Red' && <AiOutlineCheck />}
          </Button>

          <Button
            id='Blue'
            onClick={handleColor}
            type='button'
          >
            {color === 'Blue' && <AiOutlineCheck />}
          </Button>

          <Button
            id='Green'
            onClick={handleColor}
            type='button'
          >
            {color === 'Green' && <AiOutlineCheck />}
          </Button>

          <Button
            id='DarkGray'
            onClick={handleColor}
            type='button'
          >
            {color === 'DarkGray' && <AiOutlineCheck />}

          </Button>

          <Button
            id='Turquoise'
            onClick={handleColor}
            type='button'
          >
            {color === 'Turquoise' && <AiOutlineCheck />}

          </Button>

        </ColorWrapper>
        <div>
          <AddButton type='submit'>Add</AddButton>
        </div>
      </BottomWrapper>
    </NoteForm>
  )
}


const NoteForm = styled.form`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin: 30px auto;
width: 50%;
@media(max-width: 680px){
  width: 100%;
  padding: 0 20px;
} 
`;


const TitleInput = styled.input`
width: 100%;
padding: 12px 20px;
font-weight: ${variables.fontWeight.f_weight_md};
font-size: ${variables.fontSize.f_size_md};
border-bottom: 1px solid ${variables.color.bg_primary};
&::placeholder{
  opacity: 0.7;
}
`;


const NoteArea = styled.textarea`
width: 100%;
padding: 12px 20px;
resize: none;
font-weight: ${variables.fontWeight.f_weight_md};
font-size: ${variables.fontSize.f_size_md};
&::placeholder{
  opacity: 0.7;
}
`;


const ColorWrapper = styled.div`
display: flex;
align-items: center;
`;


const BottomWrapper = styled.div`
width: 100%;
background-color: ${variables.color.base};
padding: 12px 20px;
display: flex;
align-items: center;
justify-content: space-between;
`;


const Button = styled.button`
width: 25px;
height: 25px;
border-radius: 100%;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
font-size: ${variables.fontSize.f_size_sm};
color: ${variables.color.base};
&:not(:last-child){
  margin-right: 7px;
}
&#Red{
  background-color: ${variables.btnColors.red};
}
&#Blue{
  background-color: ${variables.btnColors.blue};
}
&#Green{
  background-color: ${variables.btnColors.green};
}
&#DarkGray{
  background-color: ${variables.btnColors.darkGray};
}
&#Turquoise{
  background-color: ${variables.btnColors.turquoise};
}
`;


const AddButton = styled.button`
background-color: ${variables.color.bg_btn};
height: 40px;
width: 100px;
border-radius: 20px;
color: ${variables.color.base};
cursor: pointer;
`;