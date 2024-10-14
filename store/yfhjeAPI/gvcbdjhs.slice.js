import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_gvcbdjh_list = createAsyncThunk(
  "gvcbdjhs/api_v1_gvcbdjh_list",
  async payload => {
    const response = await apiService.api_v1_gvcbdjh_list(payload)
    return response.data
  }
)
export const api_v1_gvcbdjh_create = createAsyncThunk(
  "gvcbdjhs/api_v1_gvcbdjh_create",
  async payload => {
    const response = await apiService.api_v1_gvcbdjh_create(payload)
    return response.data
  }
)
export const api_v1_gvcbdjh_retrieve = createAsyncThunk(
  "gvcbdjhs/api_v1_gvcbdjh_retrieve",
  async payload => {
    const response = await apiService.api_v1_gvcbdjh_retrieve(payload)
    return response.data
  }
)
export const api_v1_gvcbdjh_update = createAsyncThunk(
  "gvcbdjhs/api_v1_gvcbdjh_update",
  async payload => {
    const response = await apiService.api_v1_gvcbdjh_update(payload)
    return response.data
  }
)
export const api_v1_gvcbdjh_partial_update = createAsyncThunk(
  "gvcbdjhs/api_v1_gvcbdjh_partial_update",
  async payload => {
    const response = await apiService.api_v1_gvcbdjh_partial_update(payload)
    return response.data
  }
)
export const api_v1_gvcbdjh_destroy = createAsyncThunk(
  "gvcbdjhs/api_v1_gvcbdjh_destroy",
  async payload => {
    const response = await apiService.api_v1_gvcbdjh_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const gvcbdjhsSlice = createSlice({
  name: "gvcbdjhs",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_gvcbdjh_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_gvcbdjh_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_gvcbdjh_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_gvcbdjh_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_gvcbdjh_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_gvcbdjh_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_gvcbdjh_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_gvcbdjh_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_gvcbdjh_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_gvcbdjh_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_gvcbdjh_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_gvcbdjh_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_gvcbdjh_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_gvcbdjh_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_gvcbdjh_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_gvcbdjh_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_gvcbdjh_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_gvcbdjh_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_gvcbdjh_list,
  api_v1_gvcbdjh_create,
  api_v1_gvcbdjh_retrieve,
  api_v1_gvcbdjh_update,
  api_v1_gvcbdjh_partial_update,
  api_v1_gvcbdjh_destroy,
  slice: gvcbdjhsSlice
}
