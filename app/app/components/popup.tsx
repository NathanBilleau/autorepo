import React, { FC } from 'react'

import Button from './button'

interface PopupProps {
    onSubmit: () => void
    onCancel: () => void
}

const Popup: FC<PopupProps> = ({ onSubmit, onCancel, children }) => {
    return (
        <div className="popupContainer">
            <div className="popup">
                {/* <div className="popupHeader">

                </div> */}
                <div className="popupContent">
                    {children}
                </div>
                <div className="actionsContainer popupFooter">
                    <Button color="secondary" text="cancel" onClick={onCancel} />
                    <Button color="primary" text="confirm" onClick={onSubmit} />
                </div>
            </div>
        </div>
    )
}

export default Popup