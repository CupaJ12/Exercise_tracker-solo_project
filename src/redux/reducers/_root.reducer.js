import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import exerciseReducer from './exercise.reducer';
import exerciseLogReducer from './exerciseLog.reducer';
import logByDateReducer from './logByDate.reducer';
import thisExerciseLogReducer from './this.exerciseLog.reducer';
// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  exerciseReducer, //will hold the exercises retrieved from the database
  exerciseLogReducer, //will hold the exercise logs retrieved from the database
  logByDateReducer, //will hold the exercise logs for a specific date
  thisExerciseLogReducer, //will hold one specific log the user clicked edit on
});

export default rootReducer;
