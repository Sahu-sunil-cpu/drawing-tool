"use client"

import Image, { type ImageProps } from "next/image";
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import { useRef } from "react";

type Props = Omit<ImageProps, "src"> & {
  srcLight: string;
  srcDark: string;
};

const ThemeImage = (props: Props) => {
  const { srcLight, srcDark, ...rest } = props;

  return (
    <>
      <Image {...rest} src={srcLight} className="imgLight" />
      <Image {...rest} src={srcDark} className="imgDark" />
    </>
  );
};

export default function Home() {
  const roomIdRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  console.log(roomIdRef)
  return (
    <div className={styles.page}>
      <div style={{
        display: "flex",
        marginLeft: "10px"
      }}>
       <input type="text"  style={{
        marginRight: "10px"
      }}
       ref={roomIdRef}
       placeholder="please enter slug"
      />

      <div onClick={() => router.push(`/chats/${roomIdRef.current?.value}`)}>
        <Button 
         className={styles.secondary}
        
         >
          Start Chat
        </Button>
        </div>

        </div>
     
    </div>
  );
}
