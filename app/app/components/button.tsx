import { useState, VFC } from 'react'

interface ButtonProps {
    onClick: () => void
    onChange?: () => void
    text: string
    color: 'primary' | 'secondary' | 'red'
    disabled?: boolean
    shortcut?: string
    toggle?: boolean
}

const Button: VFC<ButtonProps> = ({ onClick, onChange, text, color, disabled, shortcut, toggle }) => {

    if (!toggle) {
        return (
            <div className='buttonContainer'>
                <button className={`button ${color}`} disabled={disabled} onChange={onChange} onClick={onClick}>
                    {text}
                </button>
                {shortcut && <span className={`shortcut ${disabled ? 'disabled' : ''}`}>{shortcut}</span>}
            </div>
        )
    }
    else {
        return (
            <button>
                toggle
            </button>
        )
    }
}

export default Button