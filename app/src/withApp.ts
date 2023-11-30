import { connect } from "react-redux"

import { RootState } from "Redux/store"
import { setSearchValue } from "Redux/tasks/actions"

const mapStateToProps = (state: RootState) => {
  return {
    searchValue: state.searchValue
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setSearchValue(value: string) {
      dispatch(setSearchValue(value))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)
