import { createAsyncThunk } from '@reduxjs/toolkit';

import type { ThunkConfig } from 'app/providers/StoreProvider';
import { profileActions } from 'entities/Profile';

import type { UpdateFriendStatusData, UpdateFriendStatusSchema } from '../../types/UpdateFriendStatusSchema';

export const fetchUpdateFriendStatus = createAsyncThunk<
    UpdateFriendStatusSchema,
    UpdateFriendStatusData,
    ThunkConfig<string>
>('updateFriendStatus/fetchUpdateFriendStatus', async (data, { dispatch, rejectWithValue, extra }) => {
    try {
        const response = await extra.api
            .post<UpdateFriendStatusSchema>(`/friends/${data.id}`)
            .then((response) => response.data);
        if (!response) {
            throw new Error();
        }
        if (data.location === 'profile') {
            dispatch(profileActions.setDataFriendStatus(response.friendStatus));
        }

        return response;
    } catch (error) {
        return rejectWithValue('error');
    }
});
