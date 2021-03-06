import { connect } from "react-redux";
import JournalDetail from "./journal_detail";
import { requestJournal } from "../../actions/journal_actions";
import { createComment } from "../../actions/comment_actions";
import { follow, unfollow } from '../../actions/user_actions'
import { fetchUser } from "../../actions/user_actions";

const msp = (state, ownProps) => ({
  journal: state.entities.journals[ownProps.match.params.journalId],
  user: state.entities.users[state.session.id],
  currentUserId: state.session.id
});

const mdp = (dispatch) => ({
  requestJournal: (journalId) => dispatch(requestJournal(journalId)),
  createComment: (comment) => dispatch(createComment(comment)),
  fetchUser: (userId) => dispatch(fetchUser(userId)),
  follow: userId => dispatch(follow(userId)),
  unfollow: userId => dispatch(unfollow(userId)),
});

export default connect(msp, mdp)(JournalDetail);
