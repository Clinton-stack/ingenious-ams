import BasicTable from '@/components/usersComponents/BasicTable';
import sampleData from "../../data/sample_data.json";
import { useMemo} from "react";

export default function Users() {
  const data = useMemo(() => sampleData, []);
  const tableName = "Users";

  /** @type import('@tanstack/react-table).ColumnDef<any>*/
  const columns = [
    {
      header: "ID",
      accessorKey: "id",
    },
    {
      header: "Name",
      accessorKey: "name",
    },
    {
      header: "Role",
      accessorKey: "role",
    },
    {
      header: "Location",
      accessorKey: "location",
    },
    {
      header: "Email",
      accessorKey: "email",
    },
    {
      header: "Asset IDs",
      accessorKey: "asset_IDs",
    },
    {
      header: "Role Type",
      accessorKey: "role_type",
    },
    {
      header: "Phone Number",
      accessorKey: "phone_number",
    },
    {
      header: "Username",
      accessorKey: "username",
    },
    {
      header: "Address",
      accessorKey: "address",
    },
  ];
  return (
    <div>
    <BasicTable data={data} columns={columns} tableName={tableName}/>
    </div>
  )
}
