/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const PopupCard = ({children, isOpen}) => ( 
    <div 
        css={css`
            @keyframes show {
                from{
                    top: -500px;
                }
                to{
                    top: 0;
                }
            }
            @keyframes hide {
                from{
                    top: 0;
                }
                to{
                    top: -50px;
                }       
            }   
            top: 500px;
            max-width: 320px;
            min-height: 300px;
            background: #E6E6FA;
            box-shadow: 0px 0px 4px 0px #BA55D3;
            position: relative;
            margin: 100px auto;
            padding: 15px;
            animation: ${isOpen ? "show" : "hide"} 1s;
            animation-fill-mode: forwards;
        `}>
            {children}
    </div>
);

export default PopupCard;