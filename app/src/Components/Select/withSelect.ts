import { connect } from "react-redux"

import { AppDispatch, RootState } from "../../Redux/store"
import { setFilterType } from "../../Redux/tasks/actions"
import { TFilterType } from "Redux/tasks/reducer"

const mapStateToProps = (state: RootState) => {
  return {
    selectedType: state.selectedType
  }
}

const mapDispatchToProps = (dispatch: AppDispatch) => {
  return {
    setFilterType(value: TFilterType) {
      dispatch(setFilterType(value))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)