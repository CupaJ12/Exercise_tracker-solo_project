// this saga will manage getting the exercises from the database, and posting the exercises to the database.
import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


function* fetchExercises() {
    try {
        const response = yield axios.get('/api/exercise');
        yield put({ type: 'FETCH_EXERCISES', payload: response.data });
    } catch (error) {
        console.log('Error with fetch exercises:', error);
    }
}


function* inputExercise(action) {
    try {
        yield axios.post('/api/exercise', action.payload);
        yield put({ type: 'INPUT_EXERCISE' });
    } catch (error) {
        console.log('Error with input exercise:', error);
    }
    }

function* exerciseSaga() {
    yield takeLatest('FETCH_EXERCISES', fetchExercises);
    yield takeLatest('INPUT_EXERCISE', inputExercise);
}

export default exerciseSaga;

