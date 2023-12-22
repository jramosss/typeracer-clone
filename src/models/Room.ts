import axios from 'axios'
import { User } from '../../types/user'

const getText = async () => {
    const { data } = await axios.get('/api/texts')
    return data.text
}

class Room {
    constructor(
        public name: string,
        public owner: User,
        public users: User[],
        public text?: string,
    ) {
        this.name = name
        this.owner = owner
        this.users = users
        if (text) this.text = text
        else getText().then((text) => (this.text = text))
    }
}

export default Room
