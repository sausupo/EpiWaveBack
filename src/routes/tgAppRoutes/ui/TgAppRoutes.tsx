import { Route, Routes } from "react-router-dom";
import Home from "../../../pages/Home/ui/Home";

export default function TgAppRoutes(): JSX.Element {

  const checkIsFromTgInfo = () => {
    return true;
  };

  if (checkIsFromTgInfo()) {
    return (
      <Routes>
        <Route index element={<Home />} />
        {/* <Route path="/" element={<Navigate to={AppRoutes.HOME} />} />
                <Route path="/" element={<Navigate to={AppRoutes.HOME} />} /> */}
      </Routes>
    );
  } else {
    return <div>poshel na XYI</div>;
  }
}
