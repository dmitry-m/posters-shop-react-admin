import VisitorIcon from "@mui/icons-material/People";

import UserCreate from "./UserCreate";
import UserEdit from "./UserEdit";
import UserList from "./UserList";

const resource = {
  list: UserList,
  create: UserCreate,
  edit: UserEdit,
  icon: VisitorIcon,
};

export default resource;
