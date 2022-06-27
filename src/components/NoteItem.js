/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const NoteItem = ({ data: { title, date, description } }) => (
    <div 
        css = {css`
           width: 250px;
           border: 2px solid #BA55D3;
           box-shadow: 0px 0px 4px 0px #BA55D3;
           margin: 15px;
           background-color: #E6E6FA;
           h2{
            width: 200px;
            font-size: 25px;
            font-weight: bold;
            text-align: center;
            border: 2px solid #BA55D3;
            padding: 5px 10px;
            margin: 15px;
           }
           h3{
            width: 200px;
            font-size: 20px;
            font-weight: normal;
            text-align: center;
            border: 2px solid #BA55D3;
            padding: 5px 10px;
            margin: 15px;
           }
           p{
            width: 200px;
            font-size: 20px;
            line-height: 1.2;
            font-weight: normal;
            text-align: center;
            border: 2px solid #BA55D3;
            padding: 5px 10px;
            margin: 15px;
           }
        `}
    >
        <h2>{title}</h2>
        <h3>{date}</h3>
        <p>{description}</p>
    </div>
); 

export default NoteItem;