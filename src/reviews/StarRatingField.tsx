import Icon from "@mui/icons-material/Stars";
import { Box } from "@mui/material";
import * as React from "react";
import { FieldProps, useRecordContext } from "react-admin";

interface OwnProps {
  size?: "large" | "small";
  label?: string;
  source?: string;
}

const StarRatingField = ({ size = "large", label, source }: FieldProps & OwnProps) => {
  const record = useRecordContext();
  if (!record) return null;

  return (
    <Box
      component="span"
      display="flex"
      sx={{
        opacity: 0.87,
        whiteSpace: "nowrap",
      }}
    >
      {Array(record.rating)
        .fill(true)
        .map((_, i) => (
          <Icon
            // eslint-disable-next-line react/no-array-index-key
            key={i}
            sx={{
              width: size === "large" ? 20 : 15,
              height: size === "large" ? 20 : 15,
            }}
          />
        ))}
    </Box>
  );
};

StarRatingField.defaultProps = {
  label: "resources.reviews.fields.rating",
  source: "rating",
};

export default StarRatingField;
