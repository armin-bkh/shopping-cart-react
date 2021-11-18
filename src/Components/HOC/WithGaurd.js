import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Provider/AuthProvider";
import { useQuery } from "../../hooks/useQuery";

const WithGaurd = (WrappedComponent) => {
  const Gaurd = (props) => {
    const auth = useAuth();
    const navigate = useNavigate();
    const [{ redirect }, search] = useQuery();

    useEffect(() => {
      if (auth && redirect) navigate(`/${redirect}`, { replace: true });
    }, [auth, redirect]);

    return <WrappedComponent {...props} />;
  };
  return Gaurd;
};

export default WithGaurd;
