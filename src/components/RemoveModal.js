import React from 'react';
import Modal from 'react-modal';

const RemoveModal = (props) => (
        <Modal
            isOpen={!!props.selectedOption}
            onRequestClose={props.onCancelHandler}
            contentLabel="Confirm Remove Expense"
            closeTimeoutMS={200}
            className="modal"
        >
            <h3 className="modal__text">Are you sure you want to remove this expense?</h3>
            <button className="button modal__button" onClick={props.confirmRemoveExpense}>Remove</button>
            <button className="button button--secondary" onClick={props.onCancelHandler}>Cancel</button>

        </Modal>
    );


export default RemoveModal;
