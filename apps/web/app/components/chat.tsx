/// it is server comp[onent ]

import axios from "axios";
import { BACKEND_URL } from "../config";
import ChatRoomClient from "./ChatRoomClient";

async function getChats(roomId: string) {
  const res = await axios.get(`${BACKEND_URL}/chats/${roomId}`);
  console.log(res);

  return res.data
}

export default async function Chat({roomId} : {roomId: string}) {
    

    const chats = await getChats(roomId);

    return <div>
     <ChatRoomClient id={roomId} messages={chats}  />
    </div>


}