import DollarIcon from "@mui/icons-material/AttachMoney";
import { useTranslate } from "react-admin";

import CardWithIcon from "./CardWithIcon";

interface Props {
  value?: string;
  children?: React.ReactNode;
}

const MonthlyRevenue = (props: Props) => {
  const { value, children } = props;
  const translate = useTranslate();
  return (
    <CardWithIcon
      to="/commands"
      icon={DollarIcon}
      title={translate("pos.dashboard.monthly_revenue")}
      subtitle={value}
    >
      {children}
    </CardWithIcon>
  );
};

MonthlyRevenue.defaultProps = {
  value: "0.00",
  children: null,
};

export default MonthlyRevenue;
