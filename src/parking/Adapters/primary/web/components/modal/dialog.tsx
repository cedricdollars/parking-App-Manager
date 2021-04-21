import React from 'react';
import {Wrapper, ModalContent, Backdrop, CloseButton, Element, HeaderText, ModalHeader} from "./dialogStyle";

export interface DialogProps {
    isShown: boolean
    hide: () => void
    content: JSX.Element
    headerText: string
}
export const Dialog: React.FC<DialogProps>  = ({isShown, hide, content, headerText}) => {
    return(
        <>
           <Backdrop />
           <Wrapper>
               <ModalContent>
                   <ModalHeader>
                    <HeaderText>{headerText} </HeaderText>
                   </ModalHeader>
                   <Element>{content} </Element>
               </ModalContent>
           </Wrapper>
        </>
    )
}