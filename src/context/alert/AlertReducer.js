const alertReducer = (state, action) => {
   switch (action.type) {
      case "SET_ALERT":
         return action.payload
      case "SET_REMOVE":
         return null
      default:
         return state
   }
}
export default alertReducer