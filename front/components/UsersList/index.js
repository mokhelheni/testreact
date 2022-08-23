import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material"
import { useState } from "react"

export function UsersList({ users }) {
  const [searchedAge, setSearchedAge] = useState("")

  const handleAgeSearch = (e) => {
    setSearchedAge(e.target.value)
  }

  const filteredUsers = searchedAge ? users.filter(e => e.age === parseInt(searchedAge)) : users;



  return <div>
    <TextField onChange={handleAgeSearch} placeholder="Search by age" />
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Firstname</TableCell>
            <TableCell align="right">Lastname</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Phone</TableCell>
            <TableCell align="right">Address</TableCell>
            <TableCell align="right">Age</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            filteredUsers.length === 0 && <h1>No users</h1>
          }
          {
            filteredUsers.map(u => {
              return <TableRow
                key={u.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {u.firstname}
                </TableCell>
                <TableCell align="right">{u.lastname}</TableCell>
                <TableCell align="right">{u.email}</TableCell>
                <TableCell align="right">{u.phone}</TableCell>
                <TableCell align="right">{u.address}</TableCell>
                <TableCell align="right">{u.age}</TableCell>
              </TableRow>
            })
          }
        </TableBody>
      </Table>
    </TableContainer>
  </div>
}