import { useContext } from 'react'

const TextArea = ({
    text,
    currentWordIndex,
}: {
    text: string
    currentWordIndex: number
}) => {
    return (
        <div className="border-solid border-2 border-slate-500 p-4 break-words w-1/2">
            {text.split(' ').map((word, index) => (
                <span
                    key={index}
                    className={`${
                        index === currentWordIndex ? 'text-red-500' : ''
                    }`}
                >
                    {word}{' '}
                </span>
            ))}
        </div>
    )
}

export default TextArea
