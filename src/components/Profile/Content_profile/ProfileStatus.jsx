import React from 'react';
import s from './Profile.module.css';
import {getStatus} from '../../../redux/profile-reducer'

// const ProfileStatus = (props) => {

//     return (
//         <div className={s.status__profile}>
//            <p>Привет, это мой статус. Я бы хотел убежать далеко</p>
//            <span>{props.status}</span>
//            <input value={props.status} />
//         </div>
//     )
// }

// export default ProfileStatus;

export default class ProfileStatus extends React.Component {

    state = {
        editeMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editeMode: true,
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editeMode: false,
        })
        this.props.updateStatus(this.state.status);
    }
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevState) {
       if (prevProps.status !== this.props.status) {
        this.setState({
            status: this.props.status
        })
       }
        console.log('componentDidUpdate')
    }
    
    render() {
        console.log('render')
        return (
            
            <div>
                {!this.state.editeMode &&
                    <div className={s.status__profile}>
                        <span onDoubleClick={this.activateEditMode}>Мой статус: {this.props.status || '------'}</span>
                    </div>
                }
                {this.state.editeMode  &&
                    <div className={s.status__profile}>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status} />
                    </div>
                }
            </div >
        )
    }
}
