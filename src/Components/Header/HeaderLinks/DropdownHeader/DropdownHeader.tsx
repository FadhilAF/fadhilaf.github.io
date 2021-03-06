import { Link } from "react-router-dom";
import styles from "./DropdownHeader.module.css";

function DropdownHeader(props: {
  pages: string[];
  navState: { isNavOpen: boolean; setIsNavOpen: any };
}) {
  return (
    <div className={styles.dropdown}>
      <div className={styles.section}>
        <Link
          to="/"
          onClick={() => {
            props.navState.setIsNavOpen(!props.navState.isNavOpen);
          }}
        >
          Home
        </Link>
      </div>
      {props.pages.map((page) => (
        <div className={styles.section} key={page}>
          <Link
            to={`/${page.toLowerCase()}`}
            onClick={() => {
              props.navState.setIsNavOpen(!props.navState.isNavOpen);
            }}
          >
            {page}
          </Link>
        </div>
      ))}
    </div>
  ); //perlu tambah key={} biar react tau mano yg perlu rerender atau dk usah
}

export default DropdownHeader;
