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
            <Race />
        </Layout>
    )
}

export default Home
