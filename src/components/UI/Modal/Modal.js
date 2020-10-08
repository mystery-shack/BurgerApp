import React from 'react';
import classes from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';
import Auxilary from '../../../hoc/Auxilary';

const modal = (props) => (
    <Auxilary>
            <Backdrop show = {props.show} closed = {props.ModalClosed}/>    
            <div 
            className={classes.Modal}  style = {{transform :props.show ? 'translateY(0)' :'translateY(-100vh)',
                                                opacity : props.show ?  '1': '0'  }}>
                {props.children}
            </div>
    </Auxilary>
);


export default modal;