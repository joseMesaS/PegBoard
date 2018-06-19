const NEW_USER = 'NEW_USER'
const MAKE_REQUEST = 'MAKE_REQUEST'
const MAKE_MATCH = 'MAKE_MATCH'

export function newUser(user) {
  return {
    type: NEW_USER,
    payload: user
  }
}

export function makeRequest(request) {
  return {
    type: MAKE_REQUEST,
    payload: request
  }
}

export function makeMatch(request) {
  return {
    type: MAKE_MATCH,
    payload: request
  }
}
