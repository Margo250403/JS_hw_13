/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import NoteItem from "./NoteItem";

function NoteList( {notes} ){
    return (
        <div
          css = {css`
              display: flex;
              justify-content: space-around;
              flex-wrap: wrap;

              @media (max-width: 600px) {
                justify-content: center;
              }
            `}
        >
            {notes.map((item) => (
             <NoteItem key={item.id} data={item} />
            ))}

        </div>
    );
}

export default NoteList;