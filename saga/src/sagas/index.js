import * as actions from "../store/reducers";
import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";

export function* watcherSaga() {
	console.log("watcherSaga: start");

	yield takeLatest(actions.FETCH_DOG, workerSaga);

	console.log("watcherSaga: stop");
};

function* workerSaga() {
	console.log("workerSaga: start");

	try {
		const response = yield call(axios, {
			methos: "GET",
			url: "https://dog.ceo/api/breeds/image/random"
		});

		yield put(actions.fetchDogSuccess(response.data.message));
		console.log("workerSaga: sucess");
	} catch (error) {
		yield put(actions.fetchDogError(error.data));
		console.log("workerSaga: error");
	}
}