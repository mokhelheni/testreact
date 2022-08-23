import axios from 'axios'
import { UsersList } from '../../components/UsersList';

export default function Users({ users }) {
  return <UsersList users={users} />
}

export async function getServerSideProps() {
  const users = await axios.get(process.env.NEXT_PUBLIC_API_URL + '/users')
  return {
    props: {
      users: users.data
    },
  }
}
