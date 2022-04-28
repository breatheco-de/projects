import React from "react";
import { Link } from 'gatsby';
import PropTypes from "prop-types";
import usSvg from "../assets/us.svg";
import esSvg from "../assets/es.svg";

const langSvg = {
    'us': usSvg,
    'es': esSvg,
}

const Icon = ({ lang, className }) => 
    // <div className={"icon btn btn-sm "+className} style={{ backgroundImage: `url(${url}` }}>{' '}</div>;
    <div className={"icon "+className} style={{ backgroundImage: `url(${langSvg[lang]}` }}>{' '}</div>;
Icon.propTypes = {
  url: PropTypes.string,
  className: PropTypes.string,
};
Icon.defaultProps = {
  className: '',
};

const LanguageSwitcher = ({ current, translations, onClick }) => {
    console.log(translations, 'translations');
    return (<div className="language-switcher">
        <ul>
        {
            translations.filter(lang => lang !== current).map( lang => {
                return (<li><span onClick={() => onClick(lang)}><Icon lang={lang == "en" ? "us" : lang} /></span></li>);
            })
        }
        </ul>
        <span><Icon lang={current} /></span>
    </div>);
};

export default LanguageSwitcher;