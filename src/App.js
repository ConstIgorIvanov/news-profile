import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./component/Layout/Layout";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { NewsPage } from "./pages/NewsPage/NewsPage";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage";
import { MainPage } from "./pages/MainPage/MainPage";
import { PrivateAuth } from "./hoc/PrivateAuth";
function App() {
  return (
    <>
      <Routes>
        <Route path="news-profile/" element={<Layout></Layout>}>
          <Route path="/" element={<MainPage></MainPage>}></Route>
          <Route path="/login" element={<LoginPage></LoginPage>}></Route>
          <Route path="/news" element={<NewsPage></NewsPage>}></Route>
          <Route
            path="/profile"
            element={
              <PrivateAuth>
                <ProfilePage></ProfilePage>
              </PrivateAuth>
            }
          ></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
