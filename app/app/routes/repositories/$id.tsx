import React, { VFC, useState } from 'react'
import { LoaderFunction, useLoaderData, useNavigate } from 'remix'

import Title from '~/components/title'
import SectionTitle from '~/components/sectionTitle'
import Field from '~/components/field'
import Domain from '~/components/domain'
import Button from '~/components/button'
import Status from '~/components/status'

export const loader: LoaderFunction = () => {
    return {
        name: 'asali-server'
    }
}

const Repository: VFC = () => {
    const navigate = useNavigate()

    const repo = useLoaderData()
    const [domains, setDomains] = useState([
        {
            address: 'azeaze.com',
            port: 5678
        },
    ])

    const change = (e: React.ChangeEvent) => {
        console.log(e);
    }

    const erase = () => { }

    const addDomain = () => {
        setDomains([
            ...domains,
            {
                address: 'azeaze.com',
                port: 5679
            }
        ])
    }

    const start = () => { }
    const stop = () => { }
    const pull = () => { }
    const remove = () => { }

    const back = () => {
        navigate('/repositories/')
    }

    return (
        <div>
            <div className="textStatusContainer">
                <Title prepend={{ text: 'Repositories/', onClick: back }} text={repo.name} />
                <Status size="large" status="running" />
            </div>
            <div className="actionsContainer">
                <Button text="start/restart" shortcut='cmd + shift + b' color="primary" onClick={start} />
                <Button text="stop" shortcut='cmd + shit + q' color="secondary" disabled onClick={stop} />
                <Button text="pull & restart" shortcut='cmd + shift + r' color="secondary" onClick={pull} />
                <Button text="stop & remove" shortcut='cmd + shift + return' color="secondary" disabled onClick={remove} />
                <Button text="autopull & restart" color="secondary" toggle onClick={() => { }} />
            </div>
            <div className="repositoryLayout">
                <div>
                    <SectionTitle text="Commands" />
                    <Field placeholder='docker compose up -d' label="Start command" icon='terminal' onChange={change} erase={erase} />
                    <Field placeholder='docker compose down' label="Stop command" icon='terminal' onChange={change} erase={erase} />
                    <Field placeholder='docker compose restart' label="Restart command" icon='terminal' onChange={change} erase={erase} />

                    <SectionTitle text="Domains" />
                    {
                        domains.map((domain, index) => (
                            <Domain key={domain.address} domain={domain.address} port={domain.port} addDomain={addDomain} canAdd={index === domains.length - 1} />
                        ))
                    }
                </div>
                <div>
                    <SectionTitle text="Information" />
                </div>
            </div>
        </div>
    )
}

export default Repository