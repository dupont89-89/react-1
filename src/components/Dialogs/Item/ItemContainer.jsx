import Item from './Item';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        dialogsData: state.messagesPage.dialogsData
    }
}

const ItemContainer = connect (mapStateToProps) (Item);

export default ItemContainer;