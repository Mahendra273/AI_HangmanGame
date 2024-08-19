import React from "react"
const HEAD = (
  <div style={{
    width: '40px',
    height: '40px',
    borderRadius: '100%',
    border: '7px solid black',
    position: 'absolute',
    top: '45px',
    right: '-15px'
  }} />
)

const BODY = (
  <div style={{
    width: '10px',
    height: '60px',
    background: 'black',
    position: 'absolute',
    top: '84px',
    right: '0px'
  }} />
)

const RIGHT_ARM = (
  <div
    style={{
      width: "65px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "110px",
      right: "-65px",
      rotate: "-30deg",
      transformOrigin: "left bottom",
      borderRadius: '12px'
    }}
  />
)

const LEFT_ARM = (
  <div
    style={{
      width: "65px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "110px",
      right: "10px",
      rotate: "30deg",
      transformOrigin: "right bottom",
      borderRadius: '12px'
    }}
  />
)

const RIGHT_LEG = (
  <div
    style={{
      width: "70px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "125px",
      right: "-60px",
      rotate: "60deg",
      transformOrigin: "left bottom",
      borderRadius: '12px'
    }}
  />
)

const LEFT_LEG = (
  <div
    style={{
      width: "70px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "125px",
      right: 0,
      rotate: "-60deg",
      transformOrigin: "right bottom",
      borderRadius: '12px'
    }}
  />
)

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG]

type HangmanDrawProps = {
  numberOfGuess: number
}

const HangmanDraw = ({ numberOfGuess }: HangmanDrawProps) => {
  return (
    <div style={{ position: 'relative' }} >
       {BODY_PARTS.slice(0, numberOfGuess).map((part, index) => (
        <React.Fragment key={index}>{part}</React.Fragment>
      ))}

      <div style={{
        height: '50px',
        width: '10px',
        background: 'black',
        position: 'absolute',
        top: '0',
        right: '0',
        borderRadius: '12px'
      }} />

      <div style={{
        height: '10px',
        width: '160px',
        background: 'black',
        marginLeft: '100px'
      }} />

      <div style={{
        height: '180px',
        width: '10px',
        background: 'black',
        marginLeft: '100px'
      }} />

      <div style={{
        height: '10px',
        width: '200px',
        background: 'black',
        borderRadius: '12px'
      }} />
    </div>
  )
}

export default HangmanDraw