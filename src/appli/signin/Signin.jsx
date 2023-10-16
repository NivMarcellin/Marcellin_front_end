import React from "react";
import Title from "../../component/Title";
import Footer from "../../component/Footer";

const Signin = () => {
  return (
    <div>
      <div className="content1"></div>
      <Title />
      <div className="sign">
        <div class="field">
          <p class="control has-icons-left has-icons-right">
            <input class="input" type="email" placeholder="Email" />
            <span class="icon is-small is-left">
              <i class="fas fa-envelope"></i>
            </span>
            <span class="icon is-small is-right">
              <i class="fas fa-check"></i>
            </span>
          </p>
        </div>
        <div class="field">
          <p class="control has-icons-left">
            <input class="input" type="password" placeholder="Password" />
            <span class="icon is-small is-left">
              <i class="fas fa-lock"></i>
            </span>
          </p>
        </div>
        <div className="identifier">
        <label class="checkbox">
            <input type="checkbox"/>
            Remember me
          </label>
        <div class="field">
          <p class="control">
            <button class="button">identifier</button>
          </p>
          
        </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Signin;
