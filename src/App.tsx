import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components";
import {
  ArticleDetailPage,
  FavoritePage,
  HomePage,
  PrivacyPolicyPage,
  TermsOfUsePage,
} from "./screens";
import "./styles/index.css";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { RecoilRoot } from "recoil";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <div className="App">
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/favorites" element={<FavoritePage />} />
              <Route path="/privacyPolicy" element={<PrivacyPolicyPage />} />
              <Route path="/termsOfUse" element={<TermsOfUsePage />} />
              <Route
                path="/article/detail/:id"
                element={<ArticleDetailPage />}
              />
            </Routes>
          </BrowserRouter>
        </div>
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default App;
