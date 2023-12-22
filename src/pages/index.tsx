import { FC } from 'react'
import Head from 'next/head'
import Layout from '../../layout/layout'
import Race from '@/components/Race'
import { Room } from '../../types/room'
import { createRoomLocal } from './api/rooms'

export const getServerSideProps = async () => {
    const room = createRoomLocal(
        Math.random().toString(36).substring(7),
        {
            email: 'test@gmail.com',
            id: 1,
            name: 'test',
        },
        'Lorem ipsum dolor sit amet, la mama de la mama elit, sed do mama tempor lcdtm ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    )

    return {
        props: {
            room: room.toJSON(),
        },
    }
}

const Home: FC = ({ room }: { room?: Room }) => {
    return room ? (
        <Layout>
            <Head>
                <title>TypeRacer Clone</title>
            </Head>
            <div className="flex justify-center items-center bg-slate-500">
                <h1>TypeRacer Clone</h1>
            </div>
            <div style={{ height: 'max-content' }}>
                <Race room={room!} />
            </div>
        </Layout>
    ) : (
        <>Loading...</>
    )
}

export default Home
