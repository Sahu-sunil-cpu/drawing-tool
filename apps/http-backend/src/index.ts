import express from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from '@repo/backend-common/config';
import { middleware } from "./middleware";
import { CreateUserSchema, SigninSchema, CreateRoomSchema } from "@repo/common/types";
import { prismaClient } from "@repo/db/client"


const app = express();

app.use(express.json())

const prisma = prismaClient









//const SECRET  = process.env.SECRET

// hashing password is remaining
app.post("/signup", async (req, res) => {
    console.log("---------------------------------")
    const data = CreateUserSchema.safeParse(req.body);
    //@ts-ignore

    if (!data.success) {
        res.json({
            message: "Incorrect inputs"
        })
        return;
    }


    const userExist = await prisma.user.findFirst({
        where: {
            id: data.data?.email
        }
    })


    if (!userExist) {

        try {
            const user = await prisma.user.create({
                data: {
                    name: data.data.username,
                    email: data.data.email,
                    password: data.data.password
                }
            })

            const ID = user.id;
            const token = jwt.sign({ ID }, JWT_SECRET);

            res.json({
                token
            })
        } catch (err) {
            res.json({
                error: err,
            })
        }

        return;

    } else {
        res.json({
            message: "you are registered, please signin"
        })
        return;
    }


})

app.post("/signin", async (req, res) => {

    const data = SigninSchema.safeParse(req.body);

    if (!data.success) {
        res.json({
            message: "Incorrect inputs"
        })
        return;
    }


    const userExist = await prisma.user.findFirst({
        where: {
            id: data.data?.email
        }
    })


    if (!userExist) {
        res.send({
            message: "you are not registered"
        })
    } else {

        const ID = userExist.id;
        const token = jwt.sign({ ID }, JWT_SECRET);

        res.json({
            token
        })
    }


})

app.post("/room", middleware, async (req, res) => {
    //@ts-ignore
    const userId = req.userId
    const data = CreateRoomSchema.safeParse(req.body);
    if (!data.success) {
        res.json({
            message: "Incorrect inputs"
        })
        return;
    }
    // db call
    try {
        const room = await prisma.room.create({
            data: {
                slug: data.data.name,
                adminId: userId,
            }
        })

        res.json({
            roomId: room.id
        })

        return;
    } catch (error) {
        console.log(error)
        res.json({
            error: error,
        });

        return;
    }

})

app.get("/chat/:roomId", middleware, async (req, res) => {


    const roomId = parseInt(req.params.roomId as string);

    const chats = await prisma.chat.findMany({
        where: {
            roomId: roomId,
        },

        orderBy: {
            id: "desc"
        },

        take: 50
    })

    res.send(chats);
})

app.listen(4005);