import { createStore } from 'redux'

const store = createStore(() => {
  return {
    id: 3,
    name: 'Anderson',
    email: 'anderson@anderson.com'
  }
})

export default store
