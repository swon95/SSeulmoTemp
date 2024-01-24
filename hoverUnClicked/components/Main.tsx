"use client";

import { FACE_EMOJIS } from "@/constants";
import React from "react";

export default function Main({ initText = "엥" }: { initText?: string }) {
  const [emoji, setEmoji] = React.useState(initText);
  const changeEmoji = () => {
    setEmoji(FACE_EMOJIS[Math.floor(Math.random() * FACE_EMOJIS.length)]);
  };

  return (
    <div
      className="w-[24px] h-[24px] inline-block"
      onMouseEnter={() => changeEmoji()}
    >
      {emoji}
    </div>
  );
}