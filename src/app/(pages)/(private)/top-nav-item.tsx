import type { FC, ReactNode } from "react";
import { useCallback, useState } from "react";
import PropTypes from "prop-types";
import { alpha } from "@mui/system/colorManipulator";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Paper from "@mui/material/Paper";
import Portal from "@mui/material/Portal";
import Typography from "@mui/material/Typography";

const TOP_NAV_HEIGHT = 64;
const TOP_NAV_SPACE = 16;
const OFFSET = 16;

interface TopNavItemProps {
  active?: boolean;
  external?: boolean;
  path?: string;
  popover?: ReactNode;
  title: string;
}

const TopNavItem: FC<TopNavItemProps> = (props) => {
  const { active, external, path, popover, title } = props;
  const [open, setOpen] = useState<boolean>(false);

  const handleMouseEnter = useCallback(() => {
    setOpen(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setOpen(false);
  }, []);

  if (popover) {
    return (
      <>
        <Box
          component="li"
          sx={{
            display: "flex",
            alignItems: "center",
            height: "100%",
          }}
          onMouseEnter={handleMouseEnter}
        >
          <ButtonBase
            disableRipple
            sx={{
              alignItems: "center",
              borderRadius: 1,
              display: "flex",
              justifyContent: "flex-start",
              px: "16px",
              py: "8px",
              textAlign: "left",
              "&:hover": {
                backgroundColor: "action.hover",
              },
              ...(active && {
                color: "primary.main",
              }),
            }}
          >
            <Typography component="span" variant="subtitle2">
              {title}
            </Typography>
          </ButtonBase>
        </Box>
        {open && (
          <Portal>
            <Box
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              sx={{
                left: 0,
                position: "fixed",
                pt: `${OFFSET}px`,
                right: 0,
                top: TOP_NAV_HEIGHT + TOP_NAV_SPACE,
                zIndex: (theme) => theme.zIndex.appBar + 100,
              }}
            >
              <Paper
                elevation={16}
                sx={{
                  backgroundColor: (theme) =>
                    alpha(theme.palette.background.paper, 0.9),
                  backdropFilter: "blur(6px)",
                  mx: "auto",
                  width: (theme) => theme.breakpoints.values.md,
                }}
              >
                {popover}
              </Paper>
            </Box>
          </Portal>
        )}
      </>
    );
  }

  const linkProps = path
    ? external
      ? {
          component: "a",
          href: path,
          target: "_blank",
        }
      : {
          href: path,
        }
    : {};

  return (
    <Box
      component="li"
      sx={{
        display: "flex",
        alignItems: "center",
        height: "100%",
      }}
    >
      <ButtonBase
        disableRipple
        sx={{
          alignItems: "center",
          borderRadius: 1,
          display: "flex",
          justifyContent: "flex-start",
          px: "16px",
          py: "8px",
          textAlign: "left",
          "&:hover": {
            backgroundColor: "action.hover",
          },
          ...(active && {
            color: "primary.main",
          }),
        }}
        {...linkProps}
      >
        <Typography component="span" variant="subtitle2">
          {title}
        </Typography>
      </ButtonBase>
    </Box>
  );
};

TopNavItem.propTypes = {
  active: PropTypes.bool,
  external: PropTypes.bool,
  path: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  popover: PropTypes.any,
  title: PropTypes.string.isRequired,
};

export default TopNavItem;
