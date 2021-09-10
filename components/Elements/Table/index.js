import React, {useMemo} from "react";
import {useTable, usePagination} from "react-table";


export const Table = ({columns, data}) => {
    const headers = useMemo(() => columns, [])
    const items = useMemo(() => {
        return data;
    })
    const {
            getTableProps,
            headerGroups,
            getTableBodyProps,
            page,
            nextPage,
            previousPage,
            prepareRow
          } = useTable(
              {
                columns : headers,
                data : items
              },
              usePagination
        )

    return (
        <div className="">
            <table className="min-w-full leading-normal space-y-6 rounded-2xl border-separate" {...getTableProps()} style={{borderSpacing:'0 15px'}}>
                <thead className="bg-purple-900">
                {headerGroups.map((headerGroup) => (
                    <tr className="rounded-lg" {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                            <th className="px-5 py-3 text-left text-xs font-semibold text-gray-400 capitalize tracking-wider" {...column.getHeaderProps()}>{column.render('Header')}</th>
                        ))}
                    </tr>
                ))}
                </thead>
                <tbody className="w-full" {...getTableBodyProps()}>
                {page.map((row) => {
                    prepareRow(row)
                    return(
                        <tr className="shadow rounded-lg bg-gray-50 hover:bg-purple-50" {...row.getRowProps()}>
                            {
                                row.cells.map((cell) => {
                                    return (
                                        <td className="px-5 py-5 text-sm" {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                    )
                                })
                            }
                        </tr>
                    )
                })}
                </tbody>
            </table>
            <div>
                <button onClick={()=> previousPage()}>Precedent</button>
                <button onClick={()=> nextPage()}>Suivant</button>
            </div>
        </div>

    )
}