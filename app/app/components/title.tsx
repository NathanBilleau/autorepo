import { VFC } from 'react'

interface TitleProps {
    text: string
    prepend?: {
        text: string
        onClick: () => void
    }
}

const Title: VFC<TitleProps> = ({ text, prepend }) => {
    return (
        <h1 className="title">
            {
                prepend && (
                    <button className="titlePrepend" onClick={prepend.onClick}>
                        {prepend.text}
                    </button>
                )
            }
            {text}
        </h1>
    )
}

export default Title