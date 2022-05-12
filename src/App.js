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
        <Route path="/" element={<Layout></Layout>}>
          <Route path="/news-profile" element={<MainPage></MainPage>}></Route>
          <Route
            path="news-profile/login"
            element={<LoginPage></LoginPage>}
          ></Route>
          <Route
            path="news-profile/news"
            element={<NewsPage></NewsPage>}
          ></Route>
          <Route
            path="news-profile/profile"
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
