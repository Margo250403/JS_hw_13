import { useEffect, useState } from "react";

const usePopup = (isClosePopup) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isRender, setIsRender] = useState(false);

    useEffect(() => {
        if (isClosePopup) {
            onClose();
        }
    }, [isClosePopup]);

    const onOpen = () => {
        setIsRender(true);

        setTimeout(() => {
            setIsOpen(true);
        });
    }
    const onClose = () => {
        setIsOpen(false);

        setTimeout(() => {
            setIsRender(false);
        }, 1000);
    }
    return {
        isOpen,
        onOpen, 
        onClose,
        isRender,       
    }
}

export default usePopup;