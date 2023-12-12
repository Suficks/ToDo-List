import { connect } from "react-redux"

import { RootState } from "../../Redux/store"
import { setInputValue, addTask, changeTask } from "../../Redux/tasks/actions"

const mapStateToProps = (state: RootState) => {
  return {
    inputValue: state.inputValue
  }
}
export default connect(mapStateToProps, {
  setInputValue,
  addTask,
  changeTask
})
