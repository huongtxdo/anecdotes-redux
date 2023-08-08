import { useDispatch } from 'react-redux'

import { filterChange } from '../reducers/filterReducer'

const Filter = (props) => {
  const dispatch = useDispatch()

  const style = {
    marginBottom: 10,
  }

  return (
    <div style={style}>
      filter
      <input
        name="filter"
        onChange={(event) => dispatch(filterChange(event.target.value))}
      />
    </div>
  )
}

export default Filter
