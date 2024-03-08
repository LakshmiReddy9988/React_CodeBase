import { useState } from 'react';
import ReactDOM from 'react-dom';
import './portals.css';

//Enable bootstrap in index.html file

function Modal(props) {
    return(
        ReactDOM.createPortal(
            <div className='modal-overlay'>
            <div className='content'>
                <h1>This is Modal Heading</h1>
                <p>This is modal content, click close to close the modal</p>
                <button className='btn btn-danger' onClick={props.close}>Close</button>
            </div>
            </div>, document.getElementById('modal-root')
        )
    )
}

function PortalApp() {

    const [showModal, setShowModal] = useState(false);

    function toggleModal(){
        setShowModal(!showModal)
    }

    return(
        <div className='app'>
            <button className='btn btn-primary m-4' onClick={toggleModal}>Open Modal</button>
            {
                showModal && <Modal close={toggleModal} />
            }
        </div>
    )
}

export default PortalApp

/**
 * Portals are used to display a component out of it's parent
 * Even if we display the component out of parent  using portals we can still access the props passed from that parent
 * We can display the components in anywhere by access the element from other file
 */

