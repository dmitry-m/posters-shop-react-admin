import LockIcon from "@mui/icons-material/Lock";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CircularProgress,
  Theme,
  useMediaQuery,
} from "@mui/material";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import {
  useRedirect,
  Form,
  TextInput,
  useTranslate,
  useLogin,
  useNotify,
  required,
} from "react-admin";
import { useLocation, Link } from "react-router-dom";

import CustomPage from "./CustomPage";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const translate = useTranslate();
  const redirect = useRedirect();
  const notify = useNotify();
  const login = useLogin();
  const location = useLocation();
  const isXSmall = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      redirect("/");
    }
  });

  const handleSubmit = async (auth: FormValues) => {
    setLoading(true);
    try {
      await login(auth, (location.state as { nextPathname?: string })?.nextPathname || "/");
    } catch (error) {
      setLoading(false);
      let errorString: string;
      if (error instanceof Error) {
        const errorMessage: string = Array.isArray(error.message)
          ? error.message.join(", ")
          : error.message || "pos.auth.register_error";
        errorString = typeof error === "string" ? error : errorMessage;
      } else {
        errorString = "pos.auth.register_error";
      }
      notify(errorString, {
        type: "error",
        messageArgs: {
          _: errorString,
        },
      });
    }
  };

  return (
    <CustomPage>
      <Form onSubmit={handleSubmit} noValidate>
        <Box
          sx={{
            alignItems: "center",
            background: `url(https://source.unsplash.com/random/${isXSmall ? "600x900" : "1920x1080"})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            minHeight: "100vh",
          }}
        >
          <Card sx={{ minWidth: isXSmall ? 320 : 400, marginTop: "8em !important" }}>
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
            />
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
              <Button component={Link} to="/register" variant="outlined" color="primary" fullWidth>
                {loading && <CircularProgress size={25} thickness={2} />}
                {translate("pos.auth.register")}
              </Button>
            </CardActions>
          </Card>
        </Box>
      </Form>
    </CustomPage>
  );
};

export default Login;

interface FormValues {
  username?: string;
  password?: string;
}
