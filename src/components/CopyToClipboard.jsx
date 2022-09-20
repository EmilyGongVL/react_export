import React from 'react'

export default function CopyToClipboard(props) {
  //Clipboard
const copyToClipboard = async() => {
  try {
    await navigator.clipboard.writeText(props.data)
    console.log("copied")
  } catch (e) {
    console.log("e", e)
  }
}
  return (
    <button onClick={copyToClipboard}> CLIP BOARD</button>
  )
}
