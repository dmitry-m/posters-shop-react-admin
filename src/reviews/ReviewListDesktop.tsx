import PauseCircleOutlineRoundedIcon from "@mui/icons-material/PauseCircleOutlineRounded";
import * as React from "react";
import {
  Identifier,
  Datagrid,
  DateField,
  TextField,
  BulkDeleteButton,
  BulkUpdateButton,
} from "react-admin";

import BulkAcceptButton from "./BulkAcceptButton";
import BulkRejectButton from "./BulkRejectButton";
import rowSx from "./rowSx";
import StarRatingField from "./StarRatingField";

import ProductReferenceField from "../products/ProductReferenceField";
import CustomerReferenceField from "../visitors/CustomerReferenceField";

export interface ReviewListDesktopProps {
  selectedRow?: Identifier;
}

const ReviewsBulkActionButtons = () => (
  <>
    <BulkAcceptButton />
    <BulkRejectButton />
    <BulkUpdateButton
      label="resources.reviews.action.pending"
      data={{ status: "PENDING" }}
      icon={<PauseCircleOutlineRoundedIcon />}
    />
    <BulkDeleteButton />
  </>
);

const ReviewListDesktop = ({ selectedRow }: ReviewListDesktopProps) => (
  <Datagrid
    rowClick="edit"
    rowSx={rowSx(selectedRow)}
    optimized
    bulkActionButtons={<ReviewsBulkActionButtons />}
    sx={{
      "& .column-comment": {
        maxWidth: "18em",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
      },
    }}
  >
    <DateField source="date" />
    <CustomerReferenceField link={false} />
    <ProductReferenceField link={false} />
    <StarRatingField size="small" />
    <TextField source="comment" />
    <TextField source="status" />
  </Datagrid>
);

export default ReviewListDesktop;
