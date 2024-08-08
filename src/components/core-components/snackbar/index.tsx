import Snackbar, { SnackbarCloseReason } from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

interface SnackbarComponentProps {
  open: boolean;
  handleClose: (
    event?: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason
  ) => void;
  alertText: string;
}

const SnackbarComponent: React.FC<SnackbarComponentProps> = ({
  open,
  handleClose,
  alertText,
}) => (
  <Snackbar
    open={open}
    autoHideDuration={1500}
    onClose={handleClose}
    anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
  >
    <Alert
      onClose={handleClose}
      severity="success"
      variant="filled"
      sx={{ width: "100%" }}
    >
      {alertText}
    </Alert>
  </Snackbar>
);

export default SnackbarComponent;
