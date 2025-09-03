export const TableTodo = {
    columns: [
        {
            key: "id",
            title: "ID",
            dataIndex: "id",
            render: (value: any) => value,
        },
        {
            key: "title",
            title: "Title",
            dataIndex: "title",
            render: (value: any) => value,
        },
        {
            key: "completed",
            title: "Completed",
            dataIndex: "completed",
            render: (value: boolean) => value,
        },
    ],
};
