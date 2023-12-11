import { connect } from "react-redux"

import { AppDispatch } from "../../Redux/store"
import { deleteTask, setInputValue } from "../../Redux/tasks/actions"

const mapDispatchToProps = (dispatch: AppDispatch) => {
  return {
    deleteTask(id: string) {
      dispatch(deleteTask(id))
    },
    setInputValue(value: string) {
      dispatch(setInputValue(value))
    }

  }
}

export default connect(null, mapDispatchToProps)