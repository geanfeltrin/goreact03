import { all, takeLatest } from "redux-saga/effects";

import { Types as FavoritesTypes } from "../ducks/favorites";

import { addFavorite } from "./favorites";

export default function* rootSaga() {
    yield all([takeLatest(FavoritesTypes.ADD_REQUEST, addFavorite)]);
}
