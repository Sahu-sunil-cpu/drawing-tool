import axios from "axios"
import { BACKEND_URL } from "../../config"
import Chat from "../../components/chat";


const findRoomId = async  (slug: string) => {
    const res = await  axios.get(`${BACKEND_URL}/room/${slug}`);
    console.log(res);
    return res.data
}


export default async function({ params }: { params: { slug: string }}) {
  const slug = (await params).slug;
const roomId = await findRoomId(slug);
return <div>
    <Chat roomId={roomId}></Chat>
</div>
}