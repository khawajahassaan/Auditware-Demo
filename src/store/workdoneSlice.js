import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchWorkdoneText = createAsyncThunk(
    'workdone/fetchText',
    async () => {
        const response = await fetch('https://dummyjson.com/posts?limit=5');
        const data = await response.json();

        return data.posts.map(post => post.body);
    }
);

export const workdoneSlice = createSlice({
    name: 'workdone',
    initialState: {
        texts: [],
        status: 'idle',
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchWorkdoneText.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchWorkdoneText.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.texts = action.payload;
            })
            .addCase(fetchWorkdoneText.rejected, (state) => {
                state.status = 'failed';
            });
    }
});

export default workdoneSlice.reducer;
