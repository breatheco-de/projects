import React from "react";
import { Link } from 'gatsby';

const Icon = ({ lang, className }) => 
    // <div className={"icon btn btn-sm "+className} style={{ backgroundImage: `url(${url}` }}>{' '}</div>;
    <div className={"icon "+className} style={{ backgroundImage: `url(https://www.countryflags.io/${lang}/flat/64.png` }}>{' '}</div>;
// Icon.propTypes = {
//   url: PropTypes.string,
//   className: PropTypes.string,
// };
// Icon.defaultProps = {
//   className: '',
// };

const LanguageSwitcher = ({ current, translations }) => {
    return (<div className="language-switcher">
        <ul>
        {
            Object.entries(translations).filter(lang => lang[0] !== current).map( lang => {
                return (<li><Link to={lang[1]}><Icon lang={lang} /></Link></li>);
            })
        }
        </ul>
        <span><Icon lang={current} /></span>
    </div>);
};

export default LanguageSwitcher;