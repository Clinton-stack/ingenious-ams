"use client";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getPaginationRowModel,
  getFilteredRowModel,
  getSortedRowModel,
} from "@tanstack/react-table";
import { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  HStack,
  Input,
  Select,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { CiFilter } from "react-icons/ci";
import { GoDash } from "react-icons/go";
import { FaPlus } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

export default function BasicTable({ data, columns, tableName }) {
  const [sorting, setSorting] = useState([]);
  const [filtering, setFiltering] = useState("");
  const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 10 });
  const [rowSelection, setRowSelection] = useState({});

  const selectionColumn = {
    id: "selection",
    header: ({ table }) => (
      <Checkbox
        isChecked={table.getIsAllRowsSelected()}
        isIndeterminate={table.getIsSomeRowsSelected()}
        onChange={table.getToggleAllRowsSelectedHandler()}
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        isChecked={row.getIsSelected()}
        isIndeterminate={row.getIsSomeSelected()}
        onChange={row.getToggleSelectedHandler()}
      />
    ),
  };

  const table = useReactTable({
    data,
    columns: [selectionColumn, ...columns],
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onPaginationChange: setPagination,
    state: {
      sorting,
      globalFilter: filtering,
      pagination,
      rowSelection,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setFiltering,
    onRowSelectionChange: setRowSelection,
    enableRowSelection: true,
  });

  const selectedData = table.getSelectedRowModel().rows.map((row) => row.original);


  return (
    <Box>
      <Flex
        bg="#fff"
        p="10px"
        justifyContent="space-between"
        mt="10px"
        borderRadius="5px"
      >
        <Button leftIcon={<CiFilter />} rightIcon={<IoIosArrowDown />}>
          Filter
        </Button>

        <Input
          type="text"
          placeholder="Enter User Name"
          value={filtering}
          onChange={(e) => setFiltering(e.target.value)}
          borderRadius="5px"
          bg="#F5F5F5"
          maxW="800px"
        />
        <HStack>
          <Button bgColor="#fff">
            <GoDash />
          </Button>
          <Button bgColor="#fff">
            <FaPlus />
          </Button>
        </HStack>
      </Flex>

      <Box bg="#fff" p="10px" mt="10px" borderRadius="5px">
        <Text as="h3" size="sm" fontWeight="bold">
          {tableName}
        </Text>
        <TableContainer>
          <Table variant="striped" colorScheme="gray" size="sm">
            <Thead bgColor="#5DADEC">
              {table.getHeaderGroups().map((headerGroup) => (
                <Tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <Th
                      key={header.id}
                      onClick={header.column.getToggleSortingHandler()}
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                      {header.column.getIsSorted()
                        ? header.column.getIsSorted() === "asc"
                          ? " ▲"
                          : " ▼"
                        : null}
                    </Th>
                  ))}
                </Tr>
              ))}
            </Thead>
            <Tbody>
              {table.getRowModel().rows.map((row) => (
                <Tr
                  key={row.id}
                  cursor="pointer"
                  onClick={() => row.toggleSelected()}
                >
                  {row.getVisibleCells().map((cell) => (
                    <Td key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </Td>
                  ))}
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>

        <HStack mt="5px" align="center" justify="center" wrap="wrap">
          <Button onClick={() => table.setPageIndex(0)}>{"<<"}</Button>{" "}
          <Button
            isDisabled={!table.getCanPreviousPage()}
            onClick={() => table.previousPage()}
            _disabled={{ bgColor: "#fff", cursor: "not-allowed" }}
          >
            {"<"}
          </Button>{" "}
          <Button
            isDisabled={!table.getCanNextPage()}
            onClick={() => table.nextPage()}
            _disabled={{ bgColor: "#fff", cursor: "not-allowed" }}
          >
            {">"}
          </Button>{" "}
          <Button onClick={() => table.setPageIndex(table.getPageCount() - 1)}>
            {">>"}
          </Button>{" "}
          <HStack>
            <Text>Page</Text>
            <strong>
              {table.getState().pagination.pageIndex + 1} of{" "}
              {table.getPageCount().toLocaleString()}
            </strong>
          </HStack>
          <span className="flex items-center gap-1">
            | Go to page:
            <Input
              w="80px"
              type="number"
              defaultValue={table.getState().pagination.pageIndex + 1}
              onChange={(e) => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                table.setPageIndex(page);
              }}
            />
          </span>
          <Select
            w="fit-content"
            value={table.getState().pagination.pageSize}
            onChange={(e) => {
              table.setPageSize(Number(e.target.value));
            }}
          >
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </Select>
        </HStack>
      </Box>
    </Box>
  );
}
