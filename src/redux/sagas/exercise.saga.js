// this saga will manage getting the exercises from the database, and posting the exercises to the database.
import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// fetches exercises from the database on page load for inputPage component
// function* fetchExercises() {
//     try {
//         const response = yield axios.get('/api/exercise');
//         yield put({ type: 'SET_EXERCISES', payload: response.data });
//     } catch (error) {
//         console.log('Error with fetch exercises:', error);
//     }
// }

// fetches exercise log history from the database on page load for logHistoryPage component
function* fetchExerciseLog() {
    try {
        const response = yield axios.get('/api/exercise/logHistory');
        console.table("get all:", response.data);
        yield put({ type: 'SET_EXERCISE_LOG', payload: response.data });
    } catch (error) {
        console.log('Error with fetch exercise log:', error);
    }
}


// takes exercise input from the inputPage and posts it to the database
function* inputExercise(action) {

    try {
        yield axios.post('/api/exercise', action.payload);
    } catch (error) {
        console.log('Error with input exercise:', error);
    }
    }

// deletes the specific exercise from the database when the delete button associated with it is clicked
function* deleteExercise(action) {
  
    try {
        yield axios.delete(`/api/exercise/${action.payload.id}`);
        yield put({ type: 'FETCH_EXERCISE_LOG' });
    } catch (error) {
        console.log('Error with delete exercise:', error);
    }
    
}

// handles the update of a specific exercise log in the database when the edit button is clicked

// test this one, havent tested
// also need to connect this to the edit button on the logHistoryPage, and the submit button on the inputPage.

function* editExercise(action) {
    try {
        yield axios.put(`/api/exercise/${action.payload.id}`, action.payload);
        yield put({ type: 'FETCH_EXERCISE_LOG' });
    } catch (error) {
        console.log('Error with edit exercise:', error);
    }
}





function* exerciseSaga() {
    // yield takeLatest('FETCH_EXERCISES', fetchExercises);
    yield takeLatest('INPUT_EXERCISE', inputExercise);
    yield takeLatest('DELETE_EXERCISE_LOG', deleteExercise);
    yield takeLatest('FETCH_EXERCISE_LOG', fetchExerciseLog);
    // yield takeLatest('EDIT_EXERCISE_LOG', editExercise);
    yield takeLatest('EDIT_EXERCISE_LOG', editExercise);
}

export default exerciseSaga;

