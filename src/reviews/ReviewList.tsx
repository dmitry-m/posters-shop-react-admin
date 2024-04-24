import { Box, Drawer, useMediaQuery, Theme, SxProps } from "@mui/material";
import * as React from "react";
import { useCallback } from "react";
import { List } from "react-admin";
import { matchPath, useLocation, useNavigate } from "react-router-dom";

import ReviewEdit from "./ReviewEdit";
import reviewFilters from "./reviewFilters";
import ReviewListDesktop from "./ReviewListDesktop";
import ReviewListMobile from "./ReviewListMobile";

const ReviewList = () => {
  const isXSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("sm"));
  const location = useLocation();
  const navigate = useNavigate();

  const handleClose = useCallback(() => {
    navigate("/reviews");
  }, [navigate]);

  const match = matchPath("/reviews/:id", location.pathname);

  return (
    <Box display="flex">
      <List
        sx={
          {
            flexGrow: 1,
            transition: (theme: Theme) =>
              theme.transitions.create(["all"], {
                duration: theme.transitions.duration.enteringScreen,
              }),
            marginRight: match ? "400px" : 0,
          } as SxProps
        }
        filters={reviewFilters}
        perPage={25}
        sort={{ field: "date", order: "DESC" }}
      >
        {isXSmall ? (
          <ReviewListMobile />
        ) : (
          <ReviewListDesktop
            selectedRow={match ? parseInt(match?.params?.id || "", 10) : undefined}
          />
        )}
      </List>
      <Drawer
        variant="persistent"
        open={!!match}
        anchor="right"
        onClose={handleClose}
        sx={{ zIndex: 100 }}
      >
        {!!match && <ReviewEdit id={match.params.id} onCancel={handleClose} />}
      </Drawer>
    </Box>
  );
};

export default ReviewList;
