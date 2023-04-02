import React from 'react';
import Sidebar from './Sidebar';
import StoreContext from '../../redux/store-context';

const SidebarContainer = (props) => {

    return (
        <StoreContext.Consumer>
            {store =>
                <Sidebar store={store} />
            }
        </StoreContext.Consumer>
    )
}

export default SidebarContainer;