import { useDispatch, useSelector } from 'react-redux'
import wand from '../../assets/magic-wand.svg'
import { Field } from '../field/field'
import { resetGame, selectFirstFieldNumbers, selectRandomNumbers, selectSecondFieldNumbers } from '../../game-slice'
import { createNumbersArray } from '../../utils/createNumbersArray'
import { shuffleArray } from '../../utils/shuffleArray'
import { didUserWin } from '../../utils/didUserWin'
import { useState } from 'react'

import styles from './app.module.scss'

function App() {
  const [result, setResult] = useState(null)
  const [winNumbers, setWinNumbers] = useState({})
  const selectedFirstFieldNumbers = useSelector(selectFirstFieldNumbers)
  const selectedSecondFieldNumbers = useSelector(selectSecondFieldNumbers)
  const dispatch = useDispatch()

  const firstFieldNumbers = createNumbersArray(19)
  const secondFieldNumbers = createNumbersArray(2)

  const isResultButtonDisabled = !(selectedFirstFieldNumbers?.length === 8 && selectedSecondFieldNumbers.length === 1)

  function handleMagicWandClick() {
    const firstFieldRandomNumbers = shuffleArray(firstFieldNumbers).slice(0, 8)
    const secondFielRandomNumbers = shuffleArray(secondFieldNumbers).slice(0, 1)
    dispatch(selectRandomNumbers({ firstField: firstFieldRandomNumbers, secondField: secondFielRandomNumbers }))
  }

  function handleResultButtonClick() {
    const firstFieldWinValues = shuffleArray(firstFieldNumbers).slice(0, 8)
    const secondFieldWinValues = shuffleArray(secondFieldNumbers).slice(0, 1)

    setWinNumbers({
      ...winNumbers,
      firstField: firstFieldWinValues,
      secondField: secondFieldWinValues,
    })

    setResult(
      didUserWin(firstFieldWinValues, secondFieldWinValues, selectedFirstFieldNumbers, selectedSecondFieldNumbers)
        ? 'Ого, вы выиграли! Поздравляем!'
        : 'Вы проиграли! :( Попробуйте еще раз!',
    )
  }

  console.log

  function handlePlayAgainButtonClick() {
    setResult(null)
    dispatch(resetGame())
  }

  return (
    <div className={styles.app}>
      <div className={`${styles.body} `}>
        <div className={styles.body__header}>
          <h2 className={styles.body__title}>Билет 1</h2>
          {!result && (
            <button className={styles.body__icon_button} onClick={handleMagicWandClick}>
              <img className={styles.body__icon} src={wand} />
            </button>
          )}
        </div>

        <Field
          winNumbers={result && winNumbers.firstField}
          selectedNumbers={selectedFirstFieldNumbers}
          fieldNumber={1}
          label="Отметьте 8 чисел."
          numbers={firstFieldNumbers}
        />
        <Field
          winNumbers={result && winNumbers.secondField}
          selectedNumbers={selectedSecondFieldNumbers}
          fieldNumber={2}
          label="Отметьте 1 число."
          numbers={secondFieldNumbers}
        />

        {result && (
          <>
            <p className={styles.body__result}>{result}</p>
            <button className={styles.body__result_button} onClick={handlePlayAgainButtonClick}>
              Сыграть еще раз!
            </button>
          </>
        )}

        {!result && (
          <button
            disabled={isResultButtonDisabled}
            className={styles.body__result_button}
            onClick={handleResultButtonClick}
          >
            Показать результат
          </button>
        )}
      </div>
    </div>
  )
}

export default App
