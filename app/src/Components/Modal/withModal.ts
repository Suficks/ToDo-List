import { connect } from "react-redux"

import { AppDispatch, RootState } from "../../Redux/store"
import { setInputValue } from "../../Redux/tasks/actions"

const mapStateToProps = (state: RootState) => {
  return {
    inputValue: state.inputValue
  }
}

const mapDispatchToProps = (dispatch: AppDispatch) => {
  return {
    setInputValue(value: string) {
      dispatch(setInputValue(value))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)
