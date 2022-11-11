import { useSelector, useDispatch } from 'react-redux';

import { increment, selectValue } from './slice';

function App() {

  const dispatch = useDispatch();
  const value = useSelector(selectValue);

  return (
    <>
      <p>{value}</p>
      <button onClick={() => dispatch(increment())}>+</button>
    </>
  );
}

export default App;
