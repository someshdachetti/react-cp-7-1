// Write your code here
import './index.css'

const DenominationButtons = props => {
  const {denominationsDetailes, updateBalance} = props
  const {value} = denominationsDetailes

  const onClickDenomination = () => {
    updateBalance(value)
  }
  return (
    <li className="order">
      <button onClick={() => onClickDenomination()} type="button">
        {value}
      </button>
    </li>
  )
}
export default DenominationButtons
