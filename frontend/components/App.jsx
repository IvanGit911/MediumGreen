import React from "react";
import NavBarContainer from "./navbar/navbar_container";
import EditUserContainer from "./users/edit_user_container";
import { Route, Link, Switch } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../utils/route_util";
import Modal from "./modal/modal";
import CategoriesBar from "../components/categories/category_container";
import WelcomeContainer from "./welcome/welcome_container";
import JournalIndexContainer from "./journals/journal_index_container";
import JournalDetailContainer from "../components/journals/journal_detail_container";
import CreateJournalContainer from "../components/journals/create_journal_container";
import EditJournalContainer from "../components/journals/edit_journal_container";
import UserJournalsContainer from "../components/users/user_journals_container";
import Footer from "./footer/footer";
import IndexContainer from "./index/index_container";

import CreateChildCommentsContainer from "./comments/create_child_comments_container";
import CreateTopLevelCommentContainer from "./comments/create_top_level_comment_container";

const App = () => {
  return (
    <div className="body">
      <Modal />

      <div className="navbar">
        <div id="midgrn">
          <Link to="/">MidGreen</Link>
        </div>

        <div className="nav-btn">
          <NavBarContainer />
        </div>
      </div>
      <ProtectedRoute path="/" component={CategoriesBar} />

      <Switch>
        <Route
          exact
          path="/categories/:categoryId/journals"
          component={JournalIndexContainer}
        />

        <Route
          exact
          path="/journals/:journalId"
          component={JournalDetailContainer}
        />

        <ProtectedRoute
          exact
          path="/me/settings"
          component={EditUserContainer}
        />

        <ProtectedRoute
          path="/users/:userId/journals"
          component={UserJournalsContainer}
        />

        <ProtectedRoute
          exact
          path="/new/journal"
          component={CreateJournalContainer}
        />

        <ProtectedRoute
          exact
          path="/journals/:journalId/edit"
          component={EditJournalContainer}
        />

        <ProtectedRoute
          exact
          path="/journals/:journalId/newComment"
          component={CreateTopLevelCommentContainer}
        />

        <ProtectedRoute
          exact
          path="/comments/:commentId/new"
          component={CreateChildCommentsContainer}
        />

        {/* <ProtectedRoute
          exact
          path="/comments/:commentId/edit"
          component={editCommentsContainer}
        /> */}
        
        <ProtectedRoute exact path="/" component={IndexContainer} />
      </Switch>
      <Route exact path="/welcome" component={WelcomeContainer} />

      <Footer />
    </div>
  );
};

export default App;
