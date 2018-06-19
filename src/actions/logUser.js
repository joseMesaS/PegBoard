const SELECT_USER = 'SELECT_USER'

export function logUser(user) {
  return {
    type: SELECT_USER,
    payload: user
  }
}
