import styles from './number-button.module.scss'

export function NumberButton(props) {
  const { number, handleButtonClick, isSelected, isDisabled, isWinNumber } = props

  return (
    <button
      disabled={isDisabled}
      onClick={handleButtonClick}
      value={number}
      className={`${styles.number_button} ${isWinNumber && !isSelected && styles.number_button__lose} ${
        isSelected && styles.number_button__selected
      } ${isSelected && isWinNumber && styles.number_button__selected_win}`}
    >
      {number}
    </button>
  )
}
