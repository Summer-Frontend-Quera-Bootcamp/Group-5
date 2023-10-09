import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./features/themeSlice";
import filterReducer from "./features/filterSlice";
import userReducer from "./features/userSlice";

const store = configureStore({
	reducer: {
		theme: themeReducer,
		filters: filterReducer,
		user:userReducer,
	},
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
