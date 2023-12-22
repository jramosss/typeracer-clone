import { FC } from 'react'
import Head from 'next/head'
import Layout from '../../layout/layout'
import Race from '@/components/Race'

const Home: FC = () => {
    return (
        <Layout>
            <Head>
                <title>TypeRacer Clone</title>
            </Head>
            <div className="flex justify-center items-center bg-slate-500">
                <h1>TypeRacer Clone</h1>
            </div>
            <div style={{ height: 'max-content' }}>
                <Race />
            </div>
        </Layout>
    )
}

export default Home
