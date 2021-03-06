import { VFC } from 'react'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface FieldProps {
    placeholder: string
    icon?: IconProp
    defaultValue?: string | number
    onChange: React.ChangeEventHandler<HTMLInputElement>
    type?: React.HTMLInputTypeAttribute
    erase: () => void
    label?: string
}

const Field: VFC<FieldProps> = ({ placeholder, icon, defaultValue, onChange, type, erase, label }) => {
    return (
        <label className="fieldContainer">
            {label && <span className="fieldLabel">{label}</span>}
            <div className="field">
                <input className="fieldInput" placeholder={placeholder} defaultValue={defaultValue} onChange={onChange} type={type ?? 'text'} />
                {icon && <FontAwesomeIcon icon={icon} className='fieldIcon' />}
                <button className="fieldIcon fieldErase" onClick={erase}>
                    <FontAwesomeIcon icon="times" />
                </button>
            </div>
        </label>
    )
}

export default Field