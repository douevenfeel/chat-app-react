import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { fetchSearch } from '../services/fetchSearch/fetchSearch';
import type { SearchResponse, SearchSchema, SearchSection } from '../types/SearchSchema';

const initialState: SearchSchema = { isLoading: false, q: '', section: 'all' };

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setQ: (state, action: PayloadAction<string>) => {
            state.q = action.payload;
        },
        setSection: (state, action: PayloadAction<SearchSection>) => {
            state.section = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchSearch.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchSearch.fulfilled, (state, action: PayloadAction<SearchResponse>) => {
                state.isLoading = false;
                state.error = undefined;
                state.data = action.payload.data;
                state.counts = action.payload.counts;
            })
            .addCase(fetchSearch.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: searchActions, reducer: searchReducer } = searchSlice;
