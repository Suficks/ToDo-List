import { connect } from "react-redux"

import { AppDispatch, RootState } from "Redux/store"
import { setSearchValue, setTheme } from "Redux/tasks/actions"

const mapStateToProps = (state: RootState) => {
  return {
    searchValue: state.searchValue,
    tasks: state.tasks,
    selectedType: state.selectedType,
    theme: state.theme
  }
}

const mapDispatchToProps = (dispatch: AppDispatch) => {
  return {
    setSearchValue(value: string) {
      dispatch(setSearchValue(value))
    },
    setTheme(theme: 'light' | 'dark') {
      dispatch(setTheme(theme))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)
