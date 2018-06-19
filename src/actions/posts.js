
export const MAKE_POST = 'MAKE_POST'

export function makePost(post) {
  return {
    type: MAKE_POST,
    payload: post 
  }
}
