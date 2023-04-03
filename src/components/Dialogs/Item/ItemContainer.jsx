import React from 'react';
import Item from './Item';
import StoreContext from '../../../redux/store-context';

const ItemContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {store =>
                <Item dialogsData={store.getState().messagesPage.dialogsData} />
            }
        </StoreContext.Consumer>
    );
}

export default ItemContainer;