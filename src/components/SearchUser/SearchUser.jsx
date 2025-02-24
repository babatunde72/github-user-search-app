import React, {useState} from 'react'
import Search from '../icons/search/Search';
import axios from 'axios';

const SearchUser = () => {
  const [username, setUserName] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false)

  const handleOnChange = (e) => {
    setUserName(e.target.value);
    setError('');
  };
  const handleSearch = async() => {
    setError('');
    setLoading(true)
    if (!username) {
      setError('Please enter username');
      return;
    }
    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}`
      );
      if (response.status === 200){
        setError('');
        console.log(response.data);
      }
    } catch (mistake) {
        setError('No Results');
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='flex items-center mt-24 bg-whitelightmode dark:bg-navy shadow-sm h-[70px] rounded-md relative'>
    <Search className='mx-4 ml-1.5 inline-block text-gray-400' size={20} />

    <input 
      type="text"
      value={username}
      onChange={handleOnChange}
      placeholder='Enter Github username'
      className='h-full mr-auto focus:outline-none w-full'
    />

    {error && <p className='text-red-500 w-36'>{error}</p>}
    <button 
      disabled = {loading}
      onClick={handleSearch}
      className='ml-auto disabled:bg-blackdarkmode bg-blue hover:bg-blue-light h-[50px] rounded-md text-white p-4'>
      Search
    </button>

    </div>
  )
}

export default SearchUser;