import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

interface Status {
    name: string;
}

type StatusResponse = Status[]

interface Tasks {
    tasks: [
        id: number,
        title: string,
        description: string,
    ];
}

type TaskResponse = Tasks[]

export const tasksApi = createApi({
    reducerPath: "tasksApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `http://185.46.197.203:39811/api`,
    }),
    tagTypes: ["Task"],
    endpoints: (build) => ({
        getStatusController: build.query<StatusResponse, void>({
            query: () => `/statuses`,
        }),
        getTasksController: build.query<TaskResponse, void>({
            query: (id) => `/tasks/all/${id}`,
        })
    }),
});

export const {useGetStatusControllerQuery, useGetTasksControllerQuery} = tasksApi;
