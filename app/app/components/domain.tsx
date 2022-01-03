import { VFC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Field from '~/components/field'

interface DomainProps {
    domain?: string
    port?: number
    canAdd?: boolean
    addDomain?: () => void
}

const Domain: VFC<DomainProps> = ({ domain, port, canAdd, addDomain }) => {
    return (
        <div className="domainContainer">
            <Field placeholder="domain" label="Domain" icon="globe" defaultValue={domain} onChange={() => { }} erase={() => { }} />
            <FontAwesomeIcon icon={'arrow-right'} />
            <Field placeholder="port" label="Port" icon="window-maximize" defaultValue={port} type='number' onChange={() => { }} erase={() => { }} />
            {canAdd && (
                <button className="domainAdd" onClick={addDomain}>
                    <FontAwesomeIcon icon={'plus'} />
                </button>
            )}
        </div>
    )
}

export default Domain

