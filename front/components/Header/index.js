import Link from "next/link"
import { HeaderContainer } from "./styles"
export default function Header() {
  return <HeaderContainer>
    <div>
      <Link href="/users">Users List</Link>
    </div>
    <div>
      <Link href="/users/new">Add a user</Link>
    </div>
    <div>
      <Link href="/users/export">Export/Import users</Link>
    </div>
  </HeaderContainer>
}