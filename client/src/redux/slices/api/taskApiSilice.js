import { apiSlice } from "../apiSlice";

const TASKS_URL = "/task"

export const taskApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getDashboardStats: builder.query({
            query: () => ({
                url: `${TASKS_URL}/dashboard`,
                method: "GET",
                credentials: "include",
            }),
        }),
        getAllTask: builder.query({
            query: ({ strQuery, isTrashed, search }) => ({
                url: `${TASKS_URL}?stage=${strQuery}&isTrashed=${isTrashed}&search=${search}`,
                method: "GET",
                credentials:"include",
            }),
        }),
        createTask: builder.mutation({
            query: (data) => ({
                url: `${TASKS_URL}/create`,
                method: "POST",
                body: data,
                credentials: "include",
            }),
        }),
   updateTask: builder.mutation({
  query: ({
    _id,
    title,
    date,
    team,
    stage,
    priority,
    assets,
    links,
    description
  }) => ({
    url: `${TASKS_URL}/update/${_id}`,
    method: "PUT",
    body: {
      title,
      date,
      team,
      stage,
      priority,
      assets,
      links,
      description,
    },
    credentials: "include",
  }),
}),

deleteTask: builder.mutation({
  query: ({ id, isTrashed }) => ({
    url: `/task/delete/${id}?actionType=delete`, // use "delete" to delete permanently
    method: "DELETE",
  }),
}),

}),   
});
export const { useGetDashboardStatsQuery,
    useGetAllTaskQuery,
    useCreateTaskMutation,
    useUpdateTaskMutation,
  useDeleteTaskMutation,
} = taskApiSlice
