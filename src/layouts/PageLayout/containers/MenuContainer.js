import { connect } from 'react-redux';
import Menu from '../components/Menu';

const mapStateToProps = (state) => ({
  menuItems : state.menuItems
});

export default connect(mapStateToProps)(Menu);
