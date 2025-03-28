import { useEffect, useState } from "react";
import { WS_URL } from "../config";

export default function useSocket() {
  const [loading, setLoading] = useState(true);
  const [socket, setSocket] = useState<WebSocket>()

    useEffect(() => {
      const ws = new WebSocket(`${WS_URL}?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJRCI6ImMzNTVlMmUyLTY4NTItNDE5Ni04Zjc5LTQzZjViMDUwNWFlNyIsImlhdCI6MTczOTYwMTMwN30.sFKIEfcUTbbQZ0BPlYgXUJOL4X5pWUhm7Lg9hNyP3Sg`)
       ws.onopen = () => {
        setLoading(false);
        setSocket(ws);
       }

     
    }, [])

    return {socket, loading};
}