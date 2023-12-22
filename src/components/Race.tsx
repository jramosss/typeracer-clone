import { useState } from 'react'
import TypingArea from '../components/TypingArea'
import TextArea from './TextArea'
import { Room } from '../../types/room'
import Progress from './Progress'

const Race = ({ room }: { room: Room }) => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0)

    console.log(currentWordIndex / room.text.split(' ').length)

    return room ? (
        <>
            <div className="flex flex-col items-center gap-4 mt-48">
                <div className="w-1/2">
                    <Progress
                        progress={
                            (currentWordIndex / room.text.split(' ').length) *
                            100
                        }
                    />
                </div>
                <TextArea
                    text={room.text}
                    currentWordIndex={currentWordIndex}
                />
                <TypingArea
                    word={room.text.split(' ')[currentWordIndex]}
                    onComplete={() => setCurrentWordIndex((prev) => prev + 1)}
                />
            </div>
        </>
    ) : (
        <>Loading...</>
    )
}

export default Race
