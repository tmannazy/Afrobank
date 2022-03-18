import {
  LOGIN,
  pinReset,
  register,
  transactionHistory,
  toggleBalanceDisplay,
  UPDATEUSER,
} from '../actions'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import intState from './initState'

const persistConfig = {
  key: 'root',
  storage: storage,
}

const reducer = (state = intState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        signIn: {
          ...state,
          isSignedIn: action.isSignedIn,
          payLoad: action.payload,
        },
      }
    case register:
      return {
        userReg: {
          ...state,
          isRegistered: action.isRegistered,
          payLoad: action.payload,
        },
      }
    case pinReset:
      return {
        userPinReset: {
          ...state,
          isPinReset: action.isPinReset,
          payLoad: action.payload,
        },
      }
    case transactionHistory:
      return {
        ...state,
        transactions: action.payload,
      }
    case toggleBalanceDisplay:
      return {
        ...state,
        balanceDisplay: action.payload,
      }
    case UPDATEUSER:
      return {
        ...state,
        payLoad: action.payload,
      }
    default:
      return state
  }
}
const persistedReducer = persistReducer(persistConfig, reducer)
export default persistedReducer
