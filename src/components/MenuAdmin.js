import React from "react";
import propTypes from "prop-types";
import AddBurgerForm from "./AddBurgerForm";
import EditBurgerForm from "./EditBurgerForm";
import firebase from "firebase/app";
import { useHistory } from "react-router-dom";

class MenuAdmin extends React.Component {
  state = {
    photo: "",
    user: "",
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.authHandler({ user });
      }
    });
  }

  authHandler = async (authData) => {
    const { email, photoURL } = authData.user;
    this.setState({ user: email, photo: photoURL });
    console.log(email);
    console.log('useHistory: ', useHistory);
  };

  static propTypes = {
    burgers: propTypes.object,
    deleteBurgers: propTypes.func,
    updateBurgers: propTypes.func,
    addBurgers: propTypes.func,
    loadSampleBurgers: propTypes.func,
  };

  render() {
    const { user, photo} = this.state;
    const avatar = photo ? photo : '/images/avatar.png'
    return (
      <div className="menu-admin">
        { user ? (
        <div className="login-header">
          <div className="avatar">
            <img src={avatar} alt={user} />
          </div>
          <button className="buttonLogout" onClick={this.props.handleLogout}>
            Выйти
          </button>
        </div>
        ) : null }
        <h2>Управление меню</h2>
        <AddBurgerForm addBurger={this.props.addBurger} />
        <button onClick={this.props.loadSampleBurgers}>Загрузить жраку</button>
        {Object.keys(this.props.burgers).map((key) => {
          return (
            <EditBurgerForm
              key={key}
              index={key}
              burger={this.props.burgers[key]}
              updateBurger={this.props.updateBurger}
              deleteBurger={this.props.deleteBurger}
            />
          );
        })}
      </div>
    );
  }
}

export default MenuAdmin;
