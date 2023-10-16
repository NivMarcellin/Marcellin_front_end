import React from 'react';
import Icon from '@mdi/react';
import { mdiAccount } from '@mdi/js';
import { mdiMessage } from '@mdi/js';
import { mdiBell } from '@mdi/js';

const navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary bg-dark" data-bs-theme ="dark">
  <div class="container-fluid">
    <img src="../img/Injobs.png" alt="injobs" width="50px" height="10px"/>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">accueil</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">documentation</a>
        </li>
        <li class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          Plus
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item">
            A propos
          </a>
          <a class="navbar-item">
            Contacter
          </a>
          <hr class="navbar-divider" />
          <a class="navbar-item">
            Signaler
          </a>
          </div>
        </li>
      </ul>
      <div className="info">
        <Icon path={mdiMessage} size={2} color="white" type="submit"/>
        <Icon path={mdiAccount} size={2} color="white" type="submit"/>
        <Icon path={mdiBell} size={2} color= "white" type="submit"/>
        <button class="btn btn-outline-success" type="submit">Connexion</button>
        <button class="btn btn-outline-success" type="submit">Enregistrement</button>
    </div>
    </div>
  </div>
</nav>

  );
};

export default navbar;