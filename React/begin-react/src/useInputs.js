import { useReducer , useCallback } from 'react';

function reducer (state, action ){
  switch (action.type) {
    case 'CHANGE' :
      return {
        ...state,
        [action.name] : action.value        
      };
    case 'RESET' :
      return Object.keys(state).reduce((acc, current) =>{
         acc[current] = '';
         return acc;
      }, {});
    default:
      throw new Error('Unhandled action');
  }

}
function useInputs(initialForm) {
  const [state, dispatch] = useReducer(reducer, initialForm);
  
  const onChange = useCallback(e => {
    const { name, value } = e.target;
    dispatch({
      type: 'CHANGE',
      name,
      value
    });
  }, []);

  const reset = useCallback(() => {
    dispatch({
      type: 'RESET'
    })
  }, []);

  return [state, onChange, reset];
};

export default useInputs;