import { useEffect, useState } from "react";
import { Link, usePermissions, useRedirect } from "react-admin";

import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CircularProgress,
} from "@mui/material";
import Box from "@mui/material/Box";
import LockIcon from "@mui/icons-material/Lock";
import {
  Form,
  TextInput,
  useTranslate,
  useLogin,
  useNotify,
  required,
} from "react-admin";
import CustomPage from "./CustomPage";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const translate = useTranslate();
  const redirect = useRedirect();
  const notify = useNotify();
  const login = useLogin();
  const location = useLocation();
  // const { refetch } = usePermissions();
  useEffect(() => {
    localStorage.getItem("user") && redirect("/");
  });

  const handleSubmit = (auth: FormValues) => {
    console.log({ auth });
    setLoading(true);
    login(
      auth,
      location.state ? (location.state as any).nextPathname : "/"
    ).catch((error: Error) => {
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
    console.log("refetch");
    // refetch();
  };

  return (
    <CustomPage>
      <Form onSubmit={handleSubmit} noValidate>
        <Box
          sx={{
            alignItems: "center",
            background: "url(https://source.unsplash.com/featured/1600x900)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            minHeight: "100vh",
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
              Hint: alice@prisma.io / 123456
            </Box>
            <Box sx={{ padding: "0 1em 1em 1em" }}>
              <Box sx={{ marginTop: "1em" }}>
                <TextInput
                  autoFocus
                  source="username"
                  defaultValue="alice@prisma.io"
                  label={translate("ra.auth.username")}
                  disabled={loading}
                  validate={required()}
                  fullWidth
                />
              </Box>
              <Box sx={{ marginTop: "1em" }}>
                <TextInput
                  source="password"
                  defaultValue="123456"
                  label={translate("ra.auth.password")}
                  type="password"
                  disabled={loading}
                  validate={required()}
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
                {translate("ra.auth.sign_in")}
              </Button>
              <Button
                variant="outlined"
                type="button"
                color="primary"
                fullWidth
                sx={{ padding: "0" }}
              >
                {loading && <CircularProgress size={25} thickness={2} />}
                <Link to="/register"> {translate("pos.auth.register")}</Link>
              </Button>
            </CardActions>
          </Card>
        </Box>
      </Form>
    </CustomPage>
  );
};

Login.propTypes = {
  authProvider: PropTypes.func,
  previousRoute: PropTypes.string,
};

export default Login;

interface FormValues {
  username?: string;
  password?: string;
}
