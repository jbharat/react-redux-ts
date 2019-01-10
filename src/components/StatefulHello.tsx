import * as React from 'react'

export interface Props {
  name: String
  enthusiasmLevel?: number
}

interface State {
  currentEnthusiasm: number
}

const getExclamationMarks = (numChars: number) => Array(numChars + 1).join('!')

class Hello extends React.Component<Props, State> {
  state = { currentEnthusiasm: this.props.enthusiasmLevel || 1 }

  onIncrement = () => this.updateEnthusiasm(this.state.currentEnthusiasm + 1)
  onDecrement = () => this.updateEnthusiasm(this.state.currentEnthusiasm - 1)

  updateEnthusiasm = (currentEnthusiasm: number) =>
    this.setState({ currentEnthusiasm })

  render() {
    const { name } = this.props
    if (this.state.currentEnthusiasm <= 0) {
      throw new Error('You could be a little more enthusiastic')
    }

    return (
      <div className="hello">
        <div className="greeting">
          Hello {name + getExclamationMarks(this.state.currentEnthusiasm)}
        </div>
      </div>
    )
  }
}

export default Hello
