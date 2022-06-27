/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import notes from "./notes.json";
import NoteList from "./components/NoteList";


function App() {
  return (
    <div
    css={css`
      max-width: 1100px;
      margin: auto;
    `}>
      <NoteList notes={notes} />
    </div>
  );

}

export default App;
