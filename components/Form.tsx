"use client";

import Image from "next/image";
import React, { ChangeEvent, useState } from "react";

const Form = () => {
  const [text, setText] = useState("");
  const [isCopied, setIsCopied] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    if ((e as any).nativeEvent.inputType === "deleteContentBackward") {
      // If the input event is a backspace, remove the last word and emoji
      const lastSpaceIndex = text.lastIndexOf(" 🤸 ");

      if (lastSpaceIndex !== -1) {
        const newText = text.slice(0, lastSpaceIndex);
        setText(newText);
      } else {
        // If there are no emojis, remove the last character
        const newText = text.slice(0, -1);
        setText(newText);
      }
    } else if (inputValue.endsWith(" ")) {
      // If the input value ends with a space, add the emoji
      setText(inputValue + " 🤸 ");
    } else {
      setText(inputValue);
    }

    setIsCopied(false); // Reset isCopied to false when user starts typing
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setIsCopied(true);
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedText = e.clipboardData.getData("text/plain");
    const replacedText = pastedText.replace(/ /g, " 🤸 ");
    setText(replacedText);
    setIsCopied(false); // Reset isCopied to false when user pastes text
  };

  return (
    <form className="flex justify-center items-start w-full mt-6 h-[100px]">
      <div className="w-[855px] relative flex justify-center items-center">
        <input
          type="text"
          placeholder="Bakit 🤸 malungkot 🤸 ang 🤸  beshy 🤸 ko?"
          className="w-full md:w-[855px] bg-white text-black py-2 px-2 outline focus:outline-2 focus:outline-black outline-gray-200"
          value={text}
          onChange={handleInputChange}
          onPaste={handlePaste}
        />
        {isCopied ? (
          <Image
            src="/check.png"
            height={20}
            width={20}
            alt="check icon"
            className="object-contain absolute right-4"
          />
        ) : (
          <Image
            src="/copy.png"
            height={20}
            width={20}
            alt="copy icon"
            className="object-contain absolute right-4 cursor-pointer"
            onClick={handleCopy}
          />
        )}
      </div>
    </form>
  );
};

export default Form;
