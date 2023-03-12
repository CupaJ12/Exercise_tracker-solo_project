// this saga will manage getting the exercises from the database, and posting the exercises to the database.
import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// fetches exercises from the database on page load for inputPage component
function* fetchExercises() {
    try {
        const response = yield axios.get('/api/exercise');
        yield put({ type: 'SET_EXERCISES', payload: response.data });
    } catch (error) {
        console.log('Error with fetch exercises:', error);
    }
}

// fetches exercise log history from the database on page load for logHistoryPage component
function* fetchExerciseLog() {
    try {
        const response = yield axios.get('/api/exercise/logHistory');
        yield put({ type: 'SET_EXERCISE_LOG', payload: response.data });
    } catch (error) {
        console.log('Error with fetch exercise log:', error);
    }
}


// takes exercise input from the inputPage and posts it to the database
function* inputExercise(action) {
    try {
        yield axios.post('/api/exercise', action.payload);
        yield put({ type: 'INPUT_EXERCISE' });
    } catch (error) {
        console.log('Error with input exercise:', error);
    }
    }

// deletes the specific exercise from the database when the delete button associated with it is clicked
function* deleteExercise(action) {
    console.log(action.payload)
    try {
        yield axios.delete(`/api/exercise/${action.payload}`);
        yield put({ type: 'FETCH_EXERCISES' });
    } catch (error) {
        console.log('Error with delete exercise:', error);
    }
    
}



function* exerciseSaga() {
    yield takeLatest('FETCH_EXERCISES', fetchExercises);
    yield takeLatest('INPUT_EXERCISE', inputExercise);
    yield takeLatest('DELETE_EXERCISE', deleteExercise);
    yield takeLatest('FETCH_EXERCISE_LOG', fetchExerciseLog);
}

export default exerciseSaga;

