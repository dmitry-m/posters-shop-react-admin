import { useState } from "react";
import PropTypes from "prop-types";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CircularProgress,
} from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import {
  Form,
  TextInput,
  useTranslate,
  useNotify,
  required,
  minLength,
  Link,
  useAuthProvider,
  useRedirect,
} from "react-admin";
import Box from "@mui/material/Box";
import { MyAuthProvider } from "../providers/authProvider";
import CustomPage from "./CustomPage";

const passwordRepeatValidation = (
  value: string,
  allValues: { [key: string]: any }
) => {
  if (value !== allValues.password) return "pos.auth.password_mismatch";

  return undefined;
};

const Register = () => {
  const [loading, setLoading] = useState(false);
  const translate = useTranslate();
  const redirect = useRedirect();
  const notify = useNotify();
  const authProvider = useAuthProvider<MyAuthProvider>();

  const handleSubmit = (auth: FormValues) => {
    console.log({ auth });
    setLoading(true);
    authProvider
      .signUp(auth)
      .then((result) => {
        console.log({ result });
        if (typeof result?.redirectTo === "string") {
          redirect(result.redirectTo);
        }
      })
      .catch((error: Error) => {
        setLoading(false);
        notify(
          typeof error === "string"
            ? error
            : typeof error === "undefined" || !error.message
            ? "pos.auth.register_error"
            : Array.isArray(error.message)
            ? error.message.join(", ")
            : error.message,
          {
            type: "error",
            messageArgs: {
              _:
                typeof error === "string"
                  ? error
                  : error && error.message
                  ? error.message
                  : undefined,
            },
          }
        );
      });
  };

  return (
    <CustomPage>
      <Form onSubmit={handleSubmit} mode="onBlur" reValidateMode="onBlur">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
            alignItems: "center",
            justifyContent: "flex-start",
            background: "url(https://source.unsplash.com/featured/1600x900)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <Card sx={{ minWidth: 400, marginTop: "6em" }}>
            <Box
              sx={{
                margin: "1em",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Avatar sx={{ bgcolor: "secondary.main" }}>
                <LockIcon />
              </Avatar>
            </Box>
            <Box
              sx={{
                marginTop: "1em",
                display: "flex",
                justifyContent: "center",
                color: (theme) => theme.palette.grey[500],
              }}
            >
              Hint: demo / demo
            </Box>
            <Box sx={{ padding: "0 1em 1em 1em" }}>
              <Box sx={{ marginTop: "1em" }}>
                <TextInput
                  autoFocus
                  source="username"
                  label={translate("ra.auth.username")}
                  disabled={loading}
                  validate={required()}
                  fullWidth
                />
              </Box>
              <Box sx={{ marginTop: "1em" }}>
                <TextInput
                  source="password"
                  label={translate("ra.auth.password")}
                  type="password"
                  disabled={loading}
                  validate={[required(), minLength(6)]}
                  fullWidth
                />
              </Box>
              <Box sx={{ marginTop: "1em" }}>
                <TextInput
                  source="password_repeat"
                  label={translate("pos.auth.password_repeat")}
                  type="password"
                  disabled={loading}
                  validate={[
                    required(),
                    minLength(6),
                    passwordRepeatValidation,
                  ]}
                  fullWidth
                />
              </Box>
            </Box>
            <Box
              sx={{
                marginTop: "1em",
                display: "flex",
                justifyContent: "center",
                color: (theme) => theme.palette.grey[500],
              }}
            ></Box>
            <CardActions sx={{ padding: "0 1em 1em 1em" }}>
              <Button
                variant="contained"
                type="submit"
                color="primary"
                disabled={loading}
                fullWidth
              >
                {loading && <CircularProgress size={25} thickness={2} />}
                {translate("pos.auth.register")}
              </Button>
              <Button
                variant="outlined"
                type="button"
                color="primary"
                fullWidth
              >
                {loading && <CircularProgress size={25} thickness={2} />}
                <Link to="/login"> {translate("ra.auth.sign_in")}</Link>
              </Button>
            </CardActions>
          </Card>
        </Box>
      </Form>
    </CustomPage>
  );
};

Register.propTypes = {
  authProvider: PropTypes.func,
  previousRoute: PropTypes.string,
};

export default Register;

interface FormValues {
  username?: string;
  password?: string;
}
