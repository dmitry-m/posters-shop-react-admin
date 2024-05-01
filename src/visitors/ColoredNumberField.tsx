import * as React from "react";
import { useRecordContext, NumberField, NumberFieldProps } from "react-admin";

delete NumberField.defaultProps;

const ColoredNumberField = ({ source, ...props }: NumberFieldProps) => {
  const record = useRecordContext(props);
  if (!record || !source) {
    return null;
  }
  return record[source] > 500 ? (
    <NumberField {...props} sx={{ color: "red" }} />
  ) : (
    <NumberField {...props} />
  );
};

// ColoredNumberField.defaultProps = NumberField.defaultProps;

export default ColoredNumberField;
