import React from "react";

const Search = () => {
  return (
    <div className="contenu">
    <div class="field has-addons">
      <div class="control">
        <input class="input" type="text" placeholder="intitulé du poste ou entreprise" />
      </div>
      <div class="control is-expanded">
        <div class="select is-fullwidth">
          <select name="country">
            <option value="Argentina">Argentina</option>
            <option value="Bolivia">Bolivia</option>
            <option value="Brazil">Brazil</option>
            <option value="Chile">Chile</option>
            <option value="Colombia">Colombia</option>
            <option value="Ecuador">Ecuador</option>
            <option value="Guyana">Guyana</option>
            <option value="Paraguay">Paraguay</option>
            <option value="Peru">Peru</option>
            <option value="Suriname">Suriname</option>
            <option value="Uruguay">Uruguay</option>
            <option value="Venezuela">Venezuela</option>
          </select>
        </div>
      </div>
      <div class="control">
        <button type="submit" class="button is-primary">
          Choose
        </button>
      </div>
      </div>
    </div>
  );
};

export default Search;
