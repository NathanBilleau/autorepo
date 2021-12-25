import { VFC } from 'react'

interface TitleProps {
    text: string
}

const Title: VFC<TitleProps> = ({ text }) => {
    return (
        <h1 className="title">{text}</h1>
    )
}

export default Title