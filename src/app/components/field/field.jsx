import { useDispatch } from 'react-redux'
import { NumberButton } from '../number-button/number-button'
import { toggleNumber } from '../../game-slice'

import styles from './field.module.scss'

export function Field(props) {
  const { fieldNumber, label, numbers, selectedNumbers, winNumbers } = props
  const dispatch = useDispatch()

  function isNumberSelected(number) {
    return selectedNumbers?.find((selectedNumber) => selectedNumber === number)
  }

  function isButtonDisabled(number) {
    return (!isNumberSelected(number) && selectedNumbers?.length === (fieldNumber === 1 ? 8 : 1)) || winNumbers
  }

  function isWinNumber(number) {
    return winNumbers?.find((winNumber) => winNumber === number)
  }

  function handleButtonClick(e) {
    dispatch(toggleNumber({ number: Number(e.target.value), field: fieldNumber }))
  }

  console.log(winNumbers)

  return (
    <div className={styles.field}>
      <div className={styles.field__header}>
        <h3 className={styles.field__number}>Поле {fieldNumber}</h3>
        <span>{label}</span>
      </div>
      <div className={styles.field__body}>
        {numbers.map((number) => {
          return (
            <NumberButton
              handleButtonClick={handleButtonClick}
              fieldNumber={fieldNumber}
              key={number}
              number={number}
              isWinNumber={isWinNumber(number)}
              isSelected={isNumberSelected(number)}
              isDisabled={isButtonDisabled(number)}
            />
          )
        })}
      </div>
    </div>
  )
}
