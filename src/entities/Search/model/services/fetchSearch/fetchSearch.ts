import { createAsyncThunk } from '@reduxjs/toolkit';

import type { ThunkConfig } from 'app/providers/StoreProvider';

import { getSearchQ } from '../../selectors/getSearchQ/getSearchQ';
import { getSearchSection } from '../../selectors/getSearchSection/getSearchSection';
import type { SearchResponse } from '../../types/SearchSchema';

export const fetchSearch = createAsyncThunk<SearchResponse, null, ThunkConfig<string>>(
    'search/fetchSearch',
    async (_, { rejectWithValue, extra, getState }) => {
        try {
            const q = getSearchQ(getState());
            const section = getSearchSection(getState());
            const response = await extra.api
                .get<SearchResponse>('/search', { params: { q, section } })
                .then((response) => response.data);
            if (!response) {
                throw new Error();
            }

            return response;
        } catch (error) {
            return rejectWithValue('error');
        }
    }
);
