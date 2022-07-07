/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Blog from './components/Blog';

function App() {
  return (
    <div
    css={css`
      max-width: 1100px;
      margin: auto;
    `}>
      <Blog />
    </div>
  );

}

export default App;
