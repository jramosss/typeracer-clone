import { FC, useEffect, useState } from 'react'

interface TypingAreaProps {
    word: string
    onComplete: () => void
}

const TypingArea: FC<TypingAreaProps> = ({ word, onComplete }) => {
    const [incorrectWord, setIncorrectWord] = useState(false)
    const [typedText, setTypedText] = useState('')

    useEffect(() => {
        if (word.length === typedText.length && word !== typedText) {
            setIncorrectWord(true)
        } else {
            setIncorrectWord(false)
        }
        if (word + ' ' === typedText) {
            onComplete()
            setTypedText('')
        }
    }, [typedText])

    return (
        <input
            name="typedText"
            className={`border-solid border-slate-400 border-2 ${
                incorrectWord ? 'text-red-400' : ''
            }`}
            value={typedText}
            onChange={(e) => setTypedText(e.target.value)}
        />
    )
}

export default TypingArea
