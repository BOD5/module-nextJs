import React, { FC } from 'react';

interface PropModalDialog {
  isOpen: Boolean;
  children: React.ReactNode;
}

const ModalDialog: FC<PropModalDialog> = (props) =>{
  const show = {
    display: (props.isOpen)? 'block' : 'none',
  }
  return (
    <div style={ show } className="blur" id="blur">
      <div className="center">
        { props.children }
      </div>
    </div>
  )
}

export default ModalDialog;
