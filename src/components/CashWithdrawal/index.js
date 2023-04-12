// CashWithdrawal.js
import {Component} from 'react'
import './index.css'
import DenominationButtons from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {
    balance: 2000,
    denominationsList: [
      {id: 1, value: 100},
      {id: 2, value: 500},
      {id: 3, value: 2000},
      {id: 4, value: 5000},
    ],
  }

  updateBalance = value => {
    this.setState(prevState => ({balance: prevState.balance - value}))
  }

  render() {
    const {denominationsList} = this.state
    const {balance} = this.state
    const name = 'sara Wiliams'
    const intial = name.slice(0, 1)
    return (
      <div className="app-container">
        <div className="cash-withdrawal-container ">
          <div className="user-details-container">
            <div className="initial-container">
              <p className="initial">{intial}</p>
            </div>
            <p>{name}</p>
          </div>
          <div className="balance-container ">
            <p className="your-balance">Your Balance</p>
            <p className="balance">
              2000
              {balance}
              <br />
              <span className="currency">In Rupees</span>
            </p>
          </div>
          <p className="withdraw">Withdraw</p>
          <p className="choose-sum">CHOOSE SUM (IN RUPEES)</p>
          <ul className="denominations-list">
            {denominationsList.map(each => (
              <DenominationButtons
                key={each.id}
                denominationsDetailes={each}
                updateBalance={this.updateBalance}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
