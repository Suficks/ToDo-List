import { connect } from "react-redux"

import { AppDispatch } from "../../Redux/store"
import { changeTaskProgress, deleteTask, setInputValue } from "../../Redux/tasks/actions"
import { TCurrentTaskProgress } from "./Task"

const mapDispatchToProps = (dispatch: AppDispatch) => {
  return {
    deleteTask(id: string) {
      dispatch(deleteTask(id))
    },
    setInputValue(value: string) {
      dispatch(setInputValue(value))
    },
    changeTaskProgress(progress: TCurrentTaskProgress) {
      dispatch(changeTaskProgress(progress))
    },
  }
}

export default connect(null, mapDispatchToProps)