import { connect } from "react-redux"

import { AppDispatch } from "../../Redux/store"
import { deleteTask } from "../../Redux/tasks/actions"

const mapDispatchToProps = (dispatch: AppDispatch) => {
  return {
    deleteTask(id: string) {
      dispatch(deleteTask(id))
    }
  }
}

export default connect(null, mapDispatchToProps)