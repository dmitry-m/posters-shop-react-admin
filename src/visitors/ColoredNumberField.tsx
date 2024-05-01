import * as React from "react";
import { useRecordContext, NumberField, NumberFieldProps } from "react-admin";

const ColoredNumberField = ({ source, ...props }: NumberFieldProps) => {
  const record = useRecordContext(props);
  if (!record || !source) {
    return null;
  }
  return record[source] > 500 ? (
    <NumberField {...props} source={source} sx={{ color: "red" }} />
  ) : (
    <NumberField {...props} source={source} />
  );
};

export default ColoredNumberField;
