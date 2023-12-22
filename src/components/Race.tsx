import { useEffect, useState } from 'react'
import TypingArea from '../components/TypingArea'
import { Room } from '../../types/room'

const Race = () => {
    const [room, setRoom] = useState<Room | null>(null)
    const [currentWordIndex, setCurrentWordIndex] = useState(0)

    const createRoom = async (): Promise<{ room: Room }> => {
        const response = await fetch('/api/rooms', { method: 'POST' })
        return response.json()
    }

    useEffect(() => {
        createRoom().then((response) => {
            console.log({ response })
            setRoom(response.room)
        })
    }, [])

    return room ? (
        <>
            <div className="flex flex-col items-center gap-4 mt-48">
                <div className="border-solid border-2 border-slate-500 p-4 break-words w-1/2">
                    {room.text.split(' ').map((word, index) => (
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
