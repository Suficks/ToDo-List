import { connect } from "react-redux"

import { AppDispatch, RootState } from "../../Redux/store"
import { setInputValue, addTask, changeTask } from "../../Redux/tasks/actions"
import { TTask } from "Redux/tasks/reducer"
import { TEditableComment } from "./Modal"

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
    },
    changeTask(editableComment: TEditableComment) {
      dispatch(changeTask(editableComment))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)
