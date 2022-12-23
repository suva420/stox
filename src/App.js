import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import FAQ from "./pages/FAQ";
import AdminPortal from "./pages/AdminPortal";
import PANListedShareHoldersRepor from "./pages/PANListedShareHoldersRepor";
import BoughtSoldSharesReport from "./pages/BoughtSoldSharesReport";
import MovementOfSharesReport from "./pages/MovementOfSharesReport";
import BenposMasterReport from "./pages/BenposMasterReport";
import ISINFileUpload from "./pages/ISINFileUpload";
import PanFileUpload from "./pages/PanFileUpload";
import CDSLUpload from "./pages/CDSLUpload";
import NSDLUpload from "./pages/NSDLUpload";
import CompanyMasterDetails from "./pages/CompanyMasterDetails";
import AdmnSignIn from "./pages/AdmnSignIn";
import UserSignIn from "./pages/UserSignIn";
import Welcome from "./pages/Welcome";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    //TODO: Update meta titles and descriptions below
    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/faq":
        title = "";
        metaDescription = "";
        break;
      case "/admin-portal":
        title = "";
        metaDescription = "";
        break;
      case "/pan-listed-share-holders-report":
        title = "";
        metaDescription = "";
        break;
      case "/boughtsold-shares-report":
        title = "";
        metaDescription = "";
        break;
      case "/movement-of-shares-report":
        title = "";
        metaDescription = "";
        break;
      case "/benpos-master-report":
        title = "";
        metaDescription = "";
        break;
      case "/isin-file-upload":
        title = "";
        metaDescription = "";
        break;
      case "/pan-file-upload":
        title = "";
        metaDescription = "";
        break;
      case "/cdsl-upload":
        title = "";
        metaDescription = "";
        break;
      case "/nsdl-upload":
        title = "";
        metaDescription = "";
        break;
      case "/company-master-details":
        title = "";
        metaDescription = "";
        break;
      case "/admn-sign-in":
        title = "";
        metaDescription = "";
        break;
      case "/user-sign-in":
        title = "";
        metaDescription = "";
        break;
      case "/welcome":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/faq" element={<FAQ />} />

      <Route path="/admin-portal" element={<AdminPortal />} />

      <Route
        path="/pan-listed-share-holders-report"
        element={<PANListedShareHoldersRepor />}
      />

      <Route
        path="/boughtsold-shares-report"
        element={<BoughtSoldSharesReport />}
      />

      <Route
        path="/movement-of-shares-report"
        element={<MovementOfSharesReport />}
      />

      <Route path="/benpos-master-report" element={<BenposMasterReport />} />

      <Route path="/isin-file-upload" element={<ISINFileUpload />} />

      <Route path="/pan-file-upload" element={<PanFileUpload />} />

      <Route path="/cdsl-upload" element={<CDSLUpload />} />

      <Route path="/nsdl-upload" element={<NSDLUpload />} />

      <Route
        path="/company-master-details"
        element={<CompanyMasterDetails />}
      />

      <Route path="/admn-sign-in" element={<AdmnSignIn />} />

      <Route path="/user-sign-in" element={<UserSignIn />} />

      <Route path="/welcome" element={<Welcome />} />
    </Routes>
  );
}
export default App;
