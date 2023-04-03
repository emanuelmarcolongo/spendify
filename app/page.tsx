import { getServerSession } from "next-auth"
import { authOptions } from "./api/auth/[...nextauth]/route";


export default async function Home() {
  const serversession = await getServerSession(authOptions);

  return (
    <main className=''>
      <>{JSON.stringify(serversession)}</>
     Olá mundo
    </main>
  )
}
