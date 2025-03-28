import { Button } from "@repo/ui/button";
import { useEffect, useRef, useState } from "react"
import useSocket from "../hooks/useSocket";





export default async function ChatRoomClient({messages, id} : {messages: {message: string}[]; id: string}) {
  

    const [chats, setChats] = useState(messages);
    const {socket, loading} = useSocket();
   const currentMessageRef = useRef(null);

useEffect(() => {
  if(socket && !loading) {

    socket.send(JSON.stringify({
        type: 'join_room',
        roomId: id
    }))

    socket.onmessage = (event) => {
      const parsedData = JSON.parse(event.data);
      if(parsedData.type === 'chat') {

        setChats(c => [...c, {message: parsedData.message}]);
      }
    }
  }
}, [])
    return <div>
        { chats.map(chats => <div>{chats.message} </div>)}

        <div style={{
        display: "flex",
        marginLeft: "10px"
      }}>
       <input type="text"  style={{
        marginRight: "10px"
      }}
       ref={currentMessageRef}
       placeholder="please enter slug"
      />

      <div onClick={() => {
          socket?.send(JSON.stringify({
            type: "chat",
            roomId: id,
            message: currentMessageRef.current
        }))

        
      } }>
        <Button appName="web"
       
        
         >
         send message
        </Button>
        </div>

        </div>
    </div>
}