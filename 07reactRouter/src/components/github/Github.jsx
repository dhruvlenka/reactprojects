import { useLoaderData } from 'react-router-dom'

const Github = () => {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // //API call when the component is mounted
    // //useEffect
    // useEffect(() => {
    //     fetch("https://api.github.com/users/dhruvlenka")
    //     //response which is in string format
    //     .then(response => response.json())
    //     //we will get the data in json format
    //     .then(data => {
    //         console.log(data);
    //         setData(data);
    //     })
    // }, [])

  return (
    <div classN  ame='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github Followers {data.followers}
    <img src={data.avatar_url} alt="dhruvlenka" width={300}></img>
    </div>

  )
}

export default Github;
