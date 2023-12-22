// containers/HomeContainer.js
import { connect } from 'react-redux';
import User from '../Components/user';
import { setUser } from '../Redux/Actions/userActions'; // Import your API function for fetching user data

const mapStateToProps = (state) => ({
  user: state.user.user,
});

const mapDispatchToProps = (dispatch) => ({
  setUser: (userData) => dispatch(setUser(userData)),
});

const UserContainer = connect(mapStateToProps, mapDispatchToProps)(User);

export default UserContainer;