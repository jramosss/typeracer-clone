import { User } from './user'

export type Room = {
    id: number
    name: string
    owner: User
    users: User[]
    text: string
}
