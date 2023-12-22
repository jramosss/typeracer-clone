import { FC, useEffect, useState } from 'react'

interface TypingAreaProps {
    word: string
    onComplete: () => void
}

const TypingArea: FC<TypingAreaProps> = ({ word, onComplete }) => {
    const [typedText, setTypedText] = useState('')

    useEffect(() => {
        if (word + ' ' === typedText) {
            onComplete()
            setTypedText('')
        }
    }, [typedText])

    return (
        <input
            name="typedText"
            className="border-solid border-slate-400 border-2"
            value={typedText}
            onChange={(e) => setTypedText(e.target.value)}
        />
    )
}

export default TypingArea
