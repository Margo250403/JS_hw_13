/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const NoteForm = ({ onSubmit }) => (
        <form 
            onSubmit={onSubmit}
            css={css`
                    input{
                        width: 280px;
                        height: 20px;
                        margin: 20px 0px 10px 7px;
                        padding: 10px;
                        border: 2px solid #BA55D3;
                    }
                    textarea {
                        overflow: auto;
                        resize: none;
                        width: 280px;
                        height: 50px;
                        background: #f6f6f6;
                        border: 2px solid #BA55D3;
                        border-radius: 0 0 0 0;
                        margin: 5px 0px 10px 7px;
                        padding: 60px 10px;
                    }
                    button{
                        width: 150px;
                        font-size: 15px;
                        font-weight: normal;
                        text-align: center;
                        border-radius: 7px;
                        border: 2px solid #BA55D3;
                        padding: 7px 20px;
                        margin: 10px 5px 5px 162px;
                        background: #E6E6FA;
                    }
            `}>
                <input name="title" type="text" placeholder='Название заметки' />
                <textarea name="description" type="text" placeholder='Описание заметки' />
                <button>Добавить</button>
       </form>
);

export default NoteForm;