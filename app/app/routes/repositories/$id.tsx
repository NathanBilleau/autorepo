import React, { VFC, useState } from 'react'
import { ActionFunction, LoaderFunction, useLoaderData, useNavigate } from 'remix'
import db from '~/utils/db.server'

import Title from '~/components/title'
import SectionTitle from '~/components/sectionTitle'
import Field from '~/components/field'
import Domain from '~/components/domain'
import Button from '~/components/button'
import Status from '~/components/status'


const getRepo = async (repository: number) => {
    const repo = await db.repository.findFirst({
        where: {
            id: repository
        }
    })

    if (repo) {
        return repo
    }

    throw new Error('Repository not found')
}

const start = async (repository: number): Promise<boolean> => {
    try {
        const { exec } = require('child_process')
        const repo = await getRepo(repository)

        if (repo) {
            const { startCommand, restartCommand, stopCommand, path } = repo
            const command = restartCommand || (stopCommand + ' && ' + startCommand)
            exec(`cd ${path} && ${command}`)
        }

        return true
    }
    catch (err) {
        console.error(err)
        return false
    }
}
const stop = async (repository: number): Promise<boolean> => {
    try {
        const { exec } = require('child_process')
        const repo = await getRepo(repository)

        if (repo) {
            const { stopCommand, path } = repo
            exec(`cd ${path} && ${stopCommand}`)
        }

        return true
    }
    catch (err) {
        console.error(err)
        return false
    }
}

// const pull = async (repository: number): Promise<boolean> => {
//     try {
//         const repo = await getRepo(repository)

//         return true
//     }
//     catch(err) {
//         console.error(err)
//         return false
//     }
// }


interface IActions {
    start: () => Promise<boolean>,
    stop: () => Promise<boolean>
    // pull: () => Promise<boolean>
}
const actions = {
    'start': start,
    'stop': stop,
    // 'pull': pull
}

export const action: ActionFunction = async ({ request }) => {
    const formData = await request.formData()
    const actionName = await formData.get('action')?.toString() as keyof IActions
    const repository = await formData.get('repository')?.toString()


    return repository ? await actions[actionName]?.(parseInt(repository)) : false
}

export const loader: LoaderFunction = () => {
    return {
        name: 'asali-server',
        id: 123
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
            <form method='POST'>
                <div className="actionsContainer">
                    <input type='hidden' name="repository" value={repo.id} />
                    <Button text="start/restart" shortcut='cmd + shift + b' color="primary" onClick={start} submit value="start" />
                    <Button text="stop" shortcut='cmd + shit + q' color="secondary" disabled onClick={stop} submit value="stop" />
                    <Button text="pull & restart" shortcut='cmd + shift + r' color="secondary" onClick={pull} submit value="pull" />
                    <Button text="stop & remove" shortcut='cmd + shift + return' color="secondary" disabled onClick={remove} submit value="remove" />
                    <Button text="autopull & restart" color="secondary" toggle onClick={() => { }} submit value="toggle" />
                </div>
            </form>
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