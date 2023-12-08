import { connect } from "react-redux"

import { AppDispatch, RootState } from "../../Redux/store"
import { setInputValue, addTask } from "../../Redux/tasks/actions"
import { TTask } from "Redux/tasks/reducer"

const mapStateToProps = (state: RootState) => {
  return {
    inputValue: state.inputValue
  }
}

const mapDispatchToProps = (dispatch: AppDispatch) => {
  return {
    setInputValue(value: string) {
      dispatch(setInputValue(value))
    },
    addTask(value: TTask) {
      dispatch(addTask(value))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)
