import { Box, Button, TextField } from '@mui/material';
import { useEffect, useState } from 'react'

import AddressAutocomplete from '../AddressAutocomplete';

export function UserCreateForm({ onSubmit, error, success }) {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    if(success) {
      setFormData({})
    }
  }, [success])

  const handleUpdate = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleUpdateInteger = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: parseInt(e.target.value)
    })
  }

  const handleAddressUpdate = (e) => {
    setFormData({
      ...formData,
      address: e
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  }

  return <form onSubmit={handleSubmit}>
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      {
        error && <div>
          <h2>Something went wrong, verify the inputs</h2>
        </div>
      }
      {
        success && <div>
          <h2>User has been added</h2>
        </div>
      }
      <div>
        <TextField id="outlined-basic" variant="outlined" onChange={handleUpdate} label="firstname" name="firstname" placeholder="firstname" />
      </div>
      <div>
        <TextField id="outlined-basic" variant="outlined" onChange={handleUpdate} label="lastname" name="lastname" placeholder="lastname" />
      </div>
      <div>
        <TextField id="outlined-basic" variant="outlined" onChange={handleUpdate} label="email" name="email" placeholder="email" />
      </div>
      <div>
        <TextField id="outlined-basic" variant="outlined" onChange={handleUpdate} label="phone" name="phone" placeholder="phone" />
      </div>
      <div>
        <TextField id="outlined-basic" variant="outlined" onChange={handleUpdateInteger}  label="age" name="age" placeholder="age" />
      </div>
      <div>
        <AddressAutocomplete onChange={handleAddressUpdate} name="address" placeholder="address" />
      </div>
      <div>
        <Button variant="contained" type="button" onClick={handleSubmit}>Save</Button>
      </div>
    </Box>
  </form>
}