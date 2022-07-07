/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import PopupCard from "./components/PopupCard";
import usePopup from "./hooks/usePopup";

function Popup({ children, isClosePopup }){
    const {isOpen,isRender, onClose, onOpen } = usePopup(isClosePopup); 
    
    return (
        <div>
            <button 
                onClick={onOpen}
                css={css`
                    background-color: #BA55D3;
                    border: 2px solid #BA55D3;
                    color: #fff;
                    border-radius: 3px;
                    width: 37px;
                    font-size:28px;
                    font-weight: bold;
                    margin: 10px 0px 5px 50px;
                `}
            >&#43;</button>
            { isRender && (
            <div css={css`
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    top: 0;
                    bottom: 0;
                    right: 0;
                    left: 0; 
                    background-color: rgba(0, 0, 0, .7);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    transition: 1s;
                    opacity: ${isOpen ? "1" : "0"};

                `}>
                <PopupCard>
                        <span css={css`
                            font-size: 25px;
                            font-weight: bold;
                            cursor: pointer;
                            color:#BA55D3;
                            position: absolute;
                            right: 5px;
                            top:3px;
                        `}
                    onClick={onClose}>&#215;</span>
                    {children}
                </PopupCard>
            </div>
            )}
        </div>
    );
}

export default Popup;