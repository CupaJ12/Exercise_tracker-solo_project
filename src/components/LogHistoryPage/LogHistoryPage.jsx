// this component will show all previous exercise logs for the user, with an edit and delete button for each. the logs will display in a table or list format. the edit button will take the user to the input page with the inputs prepopulated with the current info, and the delete button will delete the log from the database. there will be a logout button at the top. the user will be able to click three dots at the bottom to expand the list and view more logs. there will be a button at the bottom that takes the user to the input page to add a new exercise. 
import React from 'react';
import './LogHistoryPage.css';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

function LogHistory() {
    // declare constants, import reducers etc.
    return (
        <main>
            <div>
                <h1>Log History</h1>
            </div>
            <div>
                <button>Logout</button>
            </div>
            <div>
                <table>
                    <tr>
                        <th>Date</th>
                        <th>Exercise 1</th>
                        <th>Exercise 2</th>
                        <th>Exercise 3</th>
                        <th>Exercise 4</th>
                        <th>Exercise 5</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                    <tr>
                        <td>date</td>
                        <td>exercise1</td>
                        <td>exercise2</td>
                        <td>exercise3</td>
                        <td>exercise4</td>
                        <td>exercise5</td>
                        <td><button>Edit</button></td>
                        <td><button>Delete</button></td>
                    </tr>
                </table>
            </div>
            <div>
                <button>More</button>
            </div>
            <div>
                <button>Add new exercise</button>
            </div>
        </main>
    );


}

export default LogHistory;