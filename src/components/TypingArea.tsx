import { FC, useEffect, useState } from 'react'

interface TypingAreaProps {
    word: string
    onComplete: () => void
    enabled: boolean
}

const TypingArea: FC<TypingAreaProps> = ({ word, onComplete, enabled }) => {
    const [incorrectWord, setIncorrectWord] = useState(false)
    const [typedText, setTypedText] = useState('')
    const [typedWords, setTypedWords] = useState<string[]>([])
    const [firstWordTypedTimeStamp, setFirstWordTypedTimeStamp] = useState(0)
    const [wordsPerMinute, setWordsPerMinute] = useState(0)

    useEffect(() => {
        setFirstWordTypedTimeStamp(Date.now())
    }, [])

    useEffect(() => {
        const timeElapsed = (Date.now() - firstWordTypedTimeStamp) / 1000
        const wordsTyped = typedWords.length
        setWordsPerMinute((wordsTyped / timeElapsed) * 60)
    }, [typedWords])

    useEffect(() => {
        setIncorrectWord(word.length === typedText.length && word !== typedText)
        if (word + ' ' === typedText) {
            onComplete()
            setTypedText('')
            setTypedWords((prev) => [...prev, word])
        }
    }, [typedText])

    return (
        <div className="flex flex-col">
            <input
                className={`border-solid border-slate-400 border-2 ${
                    incorrectWord ? 'text-red-400' : ''
                }`}
                value={typedText}
                onChange={(e) => setTypedText(e.target.value)}
                disabled={!enabled}
            />
            <div className="text-xs text-slate-400">
                {wordsPerMinute.toFixed(0)} WPM
            </div>
        </div>
    )
}

export default TypingArea
