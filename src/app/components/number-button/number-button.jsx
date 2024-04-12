import styles from './number-button.module.scss'

export function NumberButton(props) {
  const { number, handleButtonClick, isSelected, isDisabled } = props

  return (
    <button
      disabled={isDisabled}
      onClick={handleButtonClick}
      value={number}
      className={`${styles.number_button} ${isSelected && styles.number_button__selected}`}
    >
      {number}
    </button>
  )
}
