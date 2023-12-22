import Room from '@/models/Room'
import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'
import { User } from '../../../types/user'

const prisma = new PrismaClient()

const createRoom = async (req: NextApiRequest, res: NextApiResponse) => {
    const { name, user } = req.body
    // const { user } = req.cookies;

    const localRoom = new Room(
        name,
        user,
        [user],
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    )
    /*   const room = await prisma.room.create({
    data: {
      name: localRoom.name,
      owner: {
        connect: {
          id: localRoom.owner.id,
        },
      },
      users: {
        connect: localRoom.users.map((user) => ({ id: user.id })),
      },
    },
  }); */

    res.status(200).json({ room: localRoom })
}

const getRooms = async (req: NextApiRequest, res: NextApiResponse) => {
    const user = req.body.user as User

    const rooms = await prisma.user.findUnique({
        where: { id: user.id }, // Replace 'userId' with the actual user ID
    })
    res.status(200).json({ rooms })
}

const getRoom = async (req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.query
    const room = await prisma.room.findUnique({
        where: {
            id: Number(id),
        },
    })
    res.status(200).json({ room })
}

const updateRoom = async (req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.query
    const { name } = req.body
    const room = await prisma.room.update({
        where: {
            id: Number(id),
        },
        data: {
            name,
        },
    })
    res.status(200).json({ room })
}

const deleteRoom = async (req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.query
    const room = await prisma.room.delete({
        where: {
            id: Number(id),
        },
    })
    res.status(200).json({ room })
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    switch (req.method) {
        case 'POST':
            await createRoom(req, res)
            break
        case 'GET':
            await getRooms(req, res)
            break
        case 'PUT':
            await updateRoom(req, res)
            break
        case 'DELETE':
            await deleteRoom(req, res)
            break
        default:
            res.status(405).json({ message: 'Method not allowed' })
            break
    }
}

export default handler
