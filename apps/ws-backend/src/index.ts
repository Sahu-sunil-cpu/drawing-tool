import { WebSocket, WebSocketServer } from 'ws';
import jwt, { JwtPayload } from "jsonwebtoken";
import { JWT_SECRET } from '@repo/backend-common/config';
import { prismaClient } from "@repo/db/client"


const prisma = prismaClient

interface User {
 
  rooms: string[];
  ws: WebSocket;
}

const users: User[] = [];

try {
  const wss = new WebSocketServer({ port: 9002 });

  wss.on('connection', function connection(ws, request) {
    const url = request.url;
    console.log(url)
    if (!url) {
      return;
    }
    const queryParams = new URLSearchParams(url.split('?')[1]);
    console.log(queryParams);
    const token = queryParams.get('token') || "";
    console.log(token)
    if (token) {
      const decoded = jwt.verify(token, JWT_SECRET);
      const userId = (decoded as JwtPayload).ID
     // console.log(ID)
      // if (typeof decoded == "string") {
      //   ws.close();
      //   return;
      // }

      // if (!decoded || !decoded.ID) {
      //   ws.close();
      //   return;
      // }

      users.push({
        rooms: [],
        ws
      })

      ws.on('message', async function message(data) {
      
        
         const  parsedData = JSON.parse(data as unknown as string); // into javascript object

      

        if (parsedData.type === 'join_room') {
         // console.log(users);
          const user = users.find(x => x.ws == ws);
         // console.log(user)
          user?.rooms.push(parsedData.roomId);
        }

        if (parsedData.type === 'leave_room') {
          const user = users.find(x => x.ws === ws);
          if (!user) {
            return;
          }

          user.rooms.filter(x => x === parsedData.room);

        }

        if (parsedData.type === 'chat') {      ////////////////  there is no auth and not persistant
          const roomId = parsedData.roomId;
          const message = parsedData.message;

          console.log(roomId, message)
          await prisma.chat.create({
               data: {
                 message,
                 roomId,
                 userId
               }
          })
          users.forEach(user => {
            if (user.rooms.includes(roomId)) {
              user.ws.send(JSON.stringify({
                type: 'chat',
                message: message,
                roomId
              }))
            }
          })
        }
        ws.send('pong');
      });

    } else {
      ws.send("provide authorization token")
      ws.close();
      return;
    }

  });

} catch (error) {
  console.log(error);
}

