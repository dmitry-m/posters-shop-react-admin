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
import { useState } from "react";
import {
  Form,
  TextInput,
  useTranslate,
  useNotify,
  required,
  minLength,
  useAuthProvider,
  useRedirect,
} from "react-admin";
import { Link } from "react-router-dom";

import CustomPage from "./CustomPage";

import { FormValues, MyAuthProvider } from "../providers/authProvider";

const passwordRepeatValidation = (value: string, allValues: { [key: string]: string }) => {
  if (value !== allValues.password) return "pos.auth.password_mismatch";

  return undefined;
};

const Register = () => {
  const [loading, setLoading] = useState(false);
  const translate = useTranslate();
  const redirect = useRedirect();
  const notify = useNotify();
  const authProvider = useAuthProvider<MyAuthProvider>();
  const isXSmall = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));

  const handleSubmit = async (auth: FormValues) => {
    console.log({ auth });
    setLoading(true);
    try {
      const result = await authProvider.signUp(auth);
      console.log({ result });
      if (typeof result?.redirectTo === "string") {
        redirect(result.redirectTo);
      }
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
      <Form onSubmit={handleSubmit} mode="onBlur" reValidateMode="onBlur">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
            alignItems: "center",
            justifyContent: "flex-start",
            background: "url(https://random.imagecdn.app/1920/1080)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
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
                  validate={[required(), minLength(6), passwordRepeatValidation]}
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
                {translate("pos.auth.register")}
              </Button>
              <Button component={Link} to="/login" variant="outlined" color="primary" fullWidth>
                {loading && <CircularProgress size={25} thickness={2} />}
                {translate("ra.auth.sign_in")}
              </Button>
            </CardActions>
          </Card>
        </Box>
      </Form>
    </CustomPage>
  );
};

export default Register;
