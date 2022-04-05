//********** IMPORTS ************* */
import React from 'react';
//******************************** */

const Modal = ({ show, modalHandler, children, closeAll }) => {
    return (
        <div className={`modal ${show ? 'opened' : 'closed'}`}>
            {show && <div className="backdrop" onClick={closeAll}></div>}
            <div className={`modal-overlay ${show ? 'show' : 'close'}`}>
                <div className="modal-content">
                    <div className="modal-close" onClick={closeAll}>
                        <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 512 512"
                            color="#02073E"
                            height="24px"
                            width="24px"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{ color: 'rgb(2, 7, 62)' }}
                        >
                            <path d="M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z"></path>
                        </svg>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    );
};
export default Modal;
