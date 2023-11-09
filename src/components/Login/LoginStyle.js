import { styled } from "@mui/system";
import { TextField, Button } from "@mui/material";

export const LoginWrapper = styled("div")({
  display: "flex",
  height: "100vh",
  backgroundColor: "white",
});

export const LeftSection = styled("div")({
  flex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const RightSection = styled("div")({
  flex: 2,
  display: "flex",
  alignItems: "center",
});

export const LoginBox = styled("div")({
  height: "50vh",
  width: "100%",
  maxWidth: "400px",
  margin: "0 0 0 5rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
});

export const Title = styled("h1")({
  margin: 0,
  marginBottom: "15%", 
  padding: 0,
  fontWeight: 600,
  textAlign: "center",
});

export const Label = styled("label")({
  margin: 0,
  marginTop: "1rem",
  padding: 0,
  color: 'rgba(0, 0, 0, 0.42)',
  fontWeight: 600,
});

export const InputField = styled(TextField)({
  width: '100%',
  margin: '1.13rem 0',
  borderRadius: '7rem',
  boxShadow: 'none',
  borderColor: 'rgba(0, 0, 0, 0.45)',
  '& .MuiInputBase-input': {
    padding: "0.5rem", 
    '&:-webkit-autofill': {
      WebkitBoxShadow: '0 0 0 1000px white inset', 
    },
  },
});

export const ButtonWrapper = styled('div')({
  display: "flex",
  justifyContent: "space-between",
});

export const RememberMeBtn = styled(Button)({
  fontWeight: 400, 
  color: "#6B6B6B",
  textTransform: "none",
  padding: 0,
  margin: "1rem 0",
  "&:hover" : {
    backgroundColor : "inherit",
  },
});

export const ForgetPassBtn = styled(Button)({
  color: "#000000",
  fontWeight: 600,
  textTransform: "none",
  padding: 0,
  margin: "1rem 0",
  "&:hover" : {
    backgroundColor : "inherit",
  },
});

export const SignInButton = styled(Button)({
  color: "#FFFFFF",
  fontSize: "medium",
  backgroundColor: "#000000",
  borderRadius: "10rem",
  textTransform: "none",
  width: "60%",
  margin: "10% auto",
  "&:hover" : {
    backgroundColor : "black",
  },
});

export const SubTitle = styled('h5')({
  fontWeight: "bold",
  margin: "0 auto",
});

export const SignUpButton = styled(Button)({
  textTransform: "none",
  fontWeight: "bold", 
  color: "#103A7B",
  "&:hover" : {
    backgroundColor : "inherit",
  },
  border: "none",
  padding: 0,
});
