import VisitorIcon from "@mui/icons-material/People";

import VisitorCreate from "./VisitorCreate";
import VisitorEdit from "./VisitorEdit";
import VisitorList from "./VisitorList";

import { Customer } from "../types";

const resource = {
  list: VisitorList,
  create: VisitorCreate,
  edit: VisitorEdit,
  icon: VisitorIcon,
  recordRepresentation: (record: Customer) => `${record.first_name} ${record.last_name}`,
};

export default resource;
