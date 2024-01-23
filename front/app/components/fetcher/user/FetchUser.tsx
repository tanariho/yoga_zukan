import axios from 'axios'

const fetchUserId = async (email: string): Promise<number | null> => {
  try {
    const response = await axios.get(`http://localhost:3000/api/v1/users`, {
      params: { email: email },
    })

    if (response.status === 200) {
      return response.data.user_id
    }
  } catch (error) {
    console.error('Error fetching user id', error)
  }

  return null
}

export default fetchUserId