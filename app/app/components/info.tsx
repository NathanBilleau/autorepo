import { VFC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

interface InfoProps {
    text: string
    icon: IconProp
}

const Info: VFC<InfoProps> = ({ text, icon }) => {
    return (
        <div className="infoContainer">
            <FontAwesomeIcon icon={icon} className='infoIcon' />
            <span className='infoText'>{text}</span>
        </div>
    )
}

export default Info