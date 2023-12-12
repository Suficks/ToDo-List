import { connect } from "react-redux"

import { changeTaskProgress, deleteTask, setInputValue } from "../../Redux/tasks/actions"

export default connect(undefined, {
  deleteTask,
  setInputValue,
  changeTaskProgress
})