const INITIAL_STATE = {
  goals: [
    {
      id: 1,
      amount: 0,
    },
    {
      id: 2,
      amount: 0,
    },
    {
      id: 3,
      amount: 0,
    },
    {
      id: 4,
      amount: 0,
    },
    {
      id: 5,
      amount: 0,
    },
    {
      id: 6,
      amount: 0,
    },
  ],
};

const goalsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "UPDATE_GOALS":
      return {
        ...state,
        goals: state.goals.map((item) =>
          item.id === action.payload.id
            ? { ...item, amount: parseInt(action.payload.amount) }
            : item
        ),
      };
    default:
      return state;
  }
};

export default goalsReducer;
