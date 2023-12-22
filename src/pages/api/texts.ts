// pages/api/texts.ts
import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    try {
        const textsCount = await prisma.text.count()
        const randomIndex = Math.floor(Math.random() * textsCount)
        const text = await prisma.text.findUnique({
            where: { id: randomIndex },
        })
        res.status(200).json({ text })
    } catch (error) {
        console.error('Error fetching text:', error)
        res.status(500).json({ error: 'Internal Server Error' })
    } finally {
        await prisma.$disconnect()
    }
}
