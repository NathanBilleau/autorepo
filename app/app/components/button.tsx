import { useState, VFC } from 'react'

interface ButtonProps {
    onClick: () => void
    text: string
    color: 'primary' | 'secondary' | 'red'
    disabled?: boolean
    shortcut?: string
    toggle?: boolean
    toggled?: boolean
}

const Button: VFC<ButtonProps> = ({ onClick, text, color, disabled, shortcut, toggle, toggled }) => {
    return (
        <div className='buttonContainer'>
            <button className={`button ${color} ${toggle ? 'toggle' : ''} ${toggled ? 'toggled' : ''}`} disabled={disabled} onClick={onClick}>
                <span>
                    {text}
                </span>
            </button>
            {shortcut && <span className={`shortcut ${disabled ? 'disabled' : ''}`}>{shortcut}</span>}
        </div>
    )
}

export default Button