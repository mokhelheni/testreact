import axios from 'axios';
import { useState } from 'react';
import { UserCreateForm } from '../../components/UserCreateForm';

export default function New() {
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)
  console.log({error })
  const handleSubmit = async (data) => {
    setSuccess(false)
    try {
      await axios.post(process.env.NEXT_PUBLIC_API_URL + '/users', data)
      setError(null)
      setSuccess(true)
    } catch(e) {
      setError(e)
    }
  }
  return (
    <UserCreateForm onSubmit={handleSubmit} error={error} success={success} />
  )
}
