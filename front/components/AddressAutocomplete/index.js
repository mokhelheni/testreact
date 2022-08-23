import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import axios from 'axios';
import { debounce } from '@mui/material';

export default function AddressAutocomplete({ onChange, name, placeholder, addressApi }) {
  const [options, setOptions] = useState([]);

  const handleChange = debounce(async (e) => {
    const addresses = await axios.get(process.env.NEXT_PUBLIC_ADDRESS_API_URL + '?q=' + e.target.value)
    const fetchedOptions = addresses.data.features.map(e => e.properties.label)
    setOptions(fetchedOptions)
  }, 300);

  const handleSelect = (e, value) => {
    onChange(value)
  }

  return <div>
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={options}
      filterOptions={e => e}
      sx={{ width: 300 }}
      onInputChange={handleChange}
      onChange={handleSelect}
      renderInput={(params) => <TextField {...params} label={placeholder} />}
    />
  </div>
}