import { FaGithub } from "react-icons/fa";
import styles from "./AppFooter.module.css";

const AppFooter = () => {
  return (
    <>
      <footer color="primary">
        <div className={styles.AppFooter}>
          <a
            href="https://github.com/iSRHcoder"
            style={{ color: "black", fontSize: "1.5rem" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <span style={{ fontSize: "1rem" }}>
            Made with ❤️ by iSRHcoder [2023]
          </span>
        </div>
      </footer>
    </>
  );
};

export default AppFooter;
