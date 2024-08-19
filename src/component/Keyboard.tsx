import styles from './Keyboard.module.css'

const KEYS = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
]

type KeyboardProps = {
  activeLetter: string[],
  inactiveLetter: string[],
  addGuessLetter: (letter: string) => void,
  disabled: boolean,
  tryAgain: () => void,
  gameOver:boolean,
}




const Keyboard = ({
  activeLetter,
  inactiveLetter,
  addGuessLetter,
  disabled = false,
  tryAgain,
  gameOver=true
}: KeyboardProps) => {
  return (
    <div className='grid grid-cols-7 gap-1 lg:gap-2'>
      {KEYS.map(key => {
        const isActive = activeLetter.includes(key);
        const isInactive = inactiveLetter.includes(key);
        return (
          <button
            onClick={() => addGuessLetter(key)}
            className={`${styles.btn} 
            ${isActive ? styles.active : ''}
            ${isInactive ? styles.inactive : ''}`}
            disabled={isInactive || isActive || disabled}
            key={key}>
            {key}
          </button>

        )
      })}  
      <button
      onClick={() => tryAgain()}
      disabled={!gameOver}
      className={`${styles.btn} ${!gameOver ? styles.inactive : ''} col-span-2`} 
      > Try 
    </button>
    </div>
  )
}

export default Keyboard