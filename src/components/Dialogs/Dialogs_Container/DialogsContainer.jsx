import React from 'react';
import Dialogs from './Dialogs';
import StoreContext from '../../../redux/store-context';

const DialogsContainer = (props) => {
 
    return (
    <StoreContext.Consumer>
        {store =>
      <Dialogs store={store} />
        }  
      </StoreContext.Consumer>
    );
}

export default DialogsContainer;