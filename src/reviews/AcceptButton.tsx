import ThumbUp from "@mui/icons-material/ThumbUp";
import Button from "@mui/material/Button";
import * as React from "react";
import { useTranslate, useUpdate, useNotify, useRedirect, useRecordContext } from "react-admin";

import { Review } from "../types";

const AcceptButton = () => {
  const translate = useTranslate();
  const notify = useNotify();
  const redirectTo = useRedirect();
  const record = useRecordContext<Review>();

  const [approve, { isLoading }] = useUpdate(
    "reviews",
    { id: record.id, data: { status: "accepted" }, previousData: record },
    {
      mutationMode: "undoable",
      onSuccess: () => {
        notify("resources.reviews.notification.approved_success", {
          type: "info",
          undoable: true,
        });
        redirectTo("/reviews");
      },
      onError: () => {
        notify("resources.reviews.notification.approved_error", {
          type: "error",
        });
      },
    },
  );
  return record && record.status === "pending" ? (
    <Button
      variant="outlined"
      color="primary"
      size="small"
      onClick={() => approve()}
      sx={{ borderColor: (theme) => theme.palette.success.main }}
      startIcon={<ThumbUp sx={{ color: (theme) => theme.palette.success.main }} />}
      disabled={isLoading}
    >
      {translate("resources.reviews.action.accept")}
    </Button>
  ) : (
    <span />
  );
};

export default AcceptButton;
