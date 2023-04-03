import React from 'react';
import Sidebar from './Sidebar';
import StoreContext from '../../redux/store-context';

const SidebarContainer = (props) => {

    return (
        <StoreContext.Consumer>
            {store =>
                <Sidebar store={store.getState().sidebar} />
            }
        </StoreContext.Consumer>
    )
}

export default SidebarContainer;