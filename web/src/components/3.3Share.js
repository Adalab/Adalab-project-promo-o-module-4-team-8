const Share = (props) => {
  return (
    <fieldset className={`share ${props.open ? '' : 'collapsed'}`}>
      <legend
        onClick={props.handleCollapseFn}
        id="share"
        className="share__legend js_collapsable_title_share js_title_list"
      >
        <div className="share__legend--wrapper">
          <i className="fas fa-share-alt share__legend--icon"></i>
          <h2 className="share__legend--title">Comparte</h2>
        </div>
        <a>
          <i
            className={`fas fa-chevron-down js-arrow ${
              props.open ? '' : 'rotate'
            }`}
          ></i>
        </a>
      </legend>
      <div className="share__button js_share_content">
        <p className="share__button--message js_error_message hidden"></p>

        <button
          className={`share__button--item js_btn_share ${
            props.dataCard === '' ? 'orange' : 'gray'
          }`}
          onClick={props.handleSharebtn}
        >
          <i className="far fa-address-card share__button--icon"></i>
          <span>Crear tarjeta</span>
        </button>
        <div
          className={`share__paragraph js_share_twitter ${
            props.dataCard === '' ? 'hidden' : ''
          }`}
        >
          <h3>
            {props.dataCard !== 'error'
              ? 'La tarjeta ha sido creada:'
              : 'Ha habido un problema'}
          </h3>
          <a
            href={props.dataCard}
            className="share__paragraph--text js-url"
            target="_blank"
            rel="noreferrer"
          >
            {props.dataCard !== 'error'
              ? `Este es el enlace a tu tarjeta: ${props.dataCard}`
              : `Por favor, rellene todos los campos`}
          </a>
          <div
            className={`share__paragraph--twButton ${
              props.dataCard === 'error' ? 'hidden' : null
            }`}
          >
            <a
              href="https://twitter.com/intent/tweet?text=Os%20comparto%20mi%20tarjeta%20de%20presentaci%C3%B3n%20hecha%20a%20trav%C3%A9s%20de%20la%20app%20web%20%22Awesome%20Profile%20Cards%22%20%20%23HTML%20%23CSS%20%23JS%20%20%23Adalab%20%23WomenInTech"
              target="_blank"
              className="share__paragraph--twLink js_tw_button"
              rel="noreferrer"
            >
              <span>Compartir en Twitter</span>
              <i className="fab fa-twitter share__paragraph--icon"></i>
            </a>
          </div>
        </div>
      </div>
    </fieldset>
  );
};

export default Share;
