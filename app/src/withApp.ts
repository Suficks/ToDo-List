import { connect } from "react-redux"

import { AppDispatch, RootState } from "Redux/store"
import { setSearchValue } from "Redux/tasks/actions"

const mapStateToProps = (state: RootState) => {
  return {
    searchValue: state.searchValue,
    tasks: state.tasks,
    selectedType: state.selectedType,
  }
}

const mapDispatchToProps = (dispatch: AppDispatch) => {
  return {
    setSearchValue(value: string) {
      dispatch(setSearchValue(value))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)
