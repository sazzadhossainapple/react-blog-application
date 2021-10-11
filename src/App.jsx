import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/page/about/About";
import Contact from "./components/page/contact/Contact";
import Home from "./components/page/home/Home";
import Login from "./components/page/login/Login";
import Register from "./components/page/register/Register";
import Settings from "./components/page/settings/Settings";
import Single from "./components/page/single/Single";
import Write from "./components/page/write/Write";
import PrivateRoute from "./components/route/PrivateRoute";
import PublicRoute from "./components/route/PublicRoute";
import TopBar from "./components/topbar/TopBar";
import { AuthProvider } from "./contexts/AuthContext";
function App() {
  return (
    <Router>
      <AuthProvider>
        <TopBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/about" component={About} />
          <PublicRoute exact path="/register" component={Register} />
          <PublicRoute exact path="/login" component={Login} />
          <PrivateRoute exact path="/write" component={Write} />
          <PrivateRoute exact path="/write/:id" component={Write} />
          <PrivateRoute exact path="/settings" component={Settings} />
          <Route exact path="/post/:id" component={Single} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
