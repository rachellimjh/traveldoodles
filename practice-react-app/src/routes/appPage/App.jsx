import { useState } from 'react'
import reactLogo from '../../assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BlogPost from '../../components/BlogPost'
import DatabaseService from '../../APIs/services/databaseService'
import { useAuth } from '../../hooks/AuthProvider'
import { useGoogleLogin } from "@react-oauth/google";
import GoogleAPIService from '../../APIs/services/googleAPIService'

function App() {
  const [count, setCount] = useState(0)
  const [post, setPost] = useState({
    title: "",
    description: "",
    author: ""
  })
  const [data, setData] = useState([
    
  ])
  const [fetchedData, setFetchedData] = useState("")
  const { user, logout, login} = useAuth();


  const handleInput = (event) => {
    setPost({...post, title: event.target.value})
  
  }

  const handleDescription = (event) => {
    setPost({...post, description: event.target.value})

  }

  const handleAuthor = (event) => {
    setPost({...post, author: event.target.value})

  }

  const handleSubmit = async () => {
    // setData([...data, post])
    // console.log(post)
    try {
const response = await DatabaseService.addPost(post)
const response2 = await DatabaseService.getPost(); setData(response2.data)
    } catch(e){
      console.log(e)
    }
    
    //console.log(response.data)
    
   

  }

  const fetchData = async () => {
    // const response = await DatabaseService.getTest();
    // setFetchedData(response.data)
    const response = await DatabaseService.getPost();
    setData(response.data)
  }

  const handleLogin = () => {
login({name:"test"})
  }
  const handleLogout = () => {
    logout()
  }

  //Google OAuth flow
  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const response = await GoogleAPIService.getGoogleData(tokenResponse);
        console.log(response.data)
        login(response.data);
      } catch (e) {
        console.log(e);
      }
    },
    onError: () => {
    },
  });

  return (
    <>
      <div>
        {user?<h1>Welcome {user.name}</h1>:<h1>Please login</h1>}
        {user?<img src={user.picture} />:null}
        
        <button onClick={handleLogin}>login</button>
        <button onClick={handleLogout}>logout</button>
        <button onClick={googleLogin}>Login with Google</button>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className='rherhe'>
        {data.map((item,i)=>{
          return(
            <BlogPost d={item.description} title={item.title} a={item.author}/>
          )
        })}
      </div>

      <div className="blog-form">
        <input onChange={handleInput} placeholder='title'  />
        <input onChange={handleDescription} placeholder="desc" />
        <input onChange={handleAuthor} placeholder="author" />
      </div>
      <button onClick={handleSubmit}>Submit</button>
      <button onClick={fetchData}>Fetch Data</button> 
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
