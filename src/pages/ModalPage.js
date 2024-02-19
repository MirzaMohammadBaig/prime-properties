import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage(){
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    }

    const handleClose = () => {
        setShowModal(false);
    }

    const actionBar = (
        <div>
            <Button danger onClick = {handleClose}>I accept</Button>
        </div>
    );

    const modal = (<Modal onClose = {handleClose} actionBar={actionBar}>
        <p>
            Here is an important thing that you need to accept
        </p>
    </Modal>);

    return(
        <div className="">
            <Button primary onClick={handleClick}>Open Modal</Button>
            <div>{ showModal && modal}</div>
        </div>
    );
}

export default ModalPage;