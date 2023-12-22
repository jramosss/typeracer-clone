import { useState } from 'react'
import TypingArea from '../components/TypingArea'
import TextArea from './TextArea'
import { Room } from '../../types/room'
import Progress from './Progress'

const timerSecs = 6

const Race = ({ room }: { room: Room }) => {
    const [timerToStart, setTimerToStart] = useState(timerSecs)
    const [currentWordIndex, setCurrentWordIndex] = useState(0)
    const { text } = room

    const StartButton = () => {
        return (
            <button
                title="Start"
                onClick={() => {
                    setTimerToStart(timerSecs - 1)
                    const timer = setInterval(() => {
                        setTimerToStart((prev) => prev - 1)
                    }, 1000)
                    setTimeout(() => {
                        clearInterval(timer)
                    }, 5000)
                }}
                className="bg-slate-400 text-white px-4 py-2 rounded-md"
            >
                Start
            </button>
        )
    }

    const Timer = () => {
        return <div className="text-4xl text-slate-400">{timerToStart}</div>
    }

    return room ? (
        <>
            <div className="flex flex-col items-center gap-4 mt-48">
                <div className="w-1/2">
                    <Progress
                        progress={
                            (currentWordIndex / text.split(' ').length) * 100
                        }
                    />
                </div>
                <TextArea text={text} currentWordIndex={currentWordIndex} />
                <TypingArea
                    word={text.split(' ')[currentWordIndex]}
                    onComplete={() => setCurrentWordIndex((prev) => prev + 1)}
                    enabled={timerToStart === 0}
                />
                {timerToStart === timerSecs && <StartButton />}
                {timerToStart > 0 && timerToStart !== timerSecs && <Timer />}
            </div>
        </>
    ) : (
        <>Loading...</>
    )
}

export default Race
