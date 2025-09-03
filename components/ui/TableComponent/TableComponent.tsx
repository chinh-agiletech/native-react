import React from 'react';
import styles from './TableComponent.module.css';

interface Column {
    key: string;
    title: string;
    dataIndex: string;
    render: (value: any) => React.ReactNode;
    className?: string;
    sortable?: boolean;
    filterable?: boolean;
    align?: 'left' | 'right' | 'center';
}

interface TableComponentProps {
    columns: Column[];
    data: any[];
}

const TableComponent: React.FC<TableComponentProps> = ({ columns, data }) => {
    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    {columns.map((col) => (
                        <th key={col.key} className={col.className ? col.className + ' ' + styles.th : styles.th}>
                            {col.title}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        {columns.map((col) => (
                            <td key={col.key} className={col.className ? col.className + ' ' + styles.td : styles.td}>
                                {col.render(row[col.dataIndex])}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default TableComponent;