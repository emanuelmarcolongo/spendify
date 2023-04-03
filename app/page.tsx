import { getServerSession } from "next-auth"
import { authOptions } from "./api/auth/[...nextauth]/route";
import { User } from "./user";




export default async function Home() {
  const serversession = await getServerSession(authOptions);

  return (
    <main className=''>
      <>
      Server Side User {JSON.stringify(serversession)}
      </>
      <br></br>
      Client User: <User/>
   
    
     
    </main>
  )
}
