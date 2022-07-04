import { StyledHeader } from "./styles";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import LoginIcon from "@mui/icons-material/Login";
import { useHistory } from "react-router-dom";

export const Header = () => {
  const history = useHistory("");

  return (
    <StyledHeader>
      <h1 onClick={() => history.push("/")} className="logo">
        Kenzie Shop
      </h1>
      <div className="container">
        <button onClick={() => history.push("/cart")}>
          <ShoppingCartOutlinedIcon />
          Carrinho
        </button>
        <button>
          <LoginIcon />
          Entrar
        </button>
      </div>
    </StyledHeader>
  );
};
