export function UserReducer(state, action) {
  const { payload, type } = action;

  const actions = {
    'GetUsers': () => ({
      ...state,
      users: payload
    }),
    'GetUser': () => ({
      ...state,
      userSelected: payload
    })
  }

  const typeAction = actions[type] ?? state;
  return typeAction;
}