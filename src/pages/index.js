import React from "react"
import { Link } from "gatsby";
import Header from "../components/header/Header";
import styles from "./index.module.css";
import Resume from "./resume";

export default () =>  {
  return(
    <div className={styles.container}> 
    <Resume></Resume>
    </div>
  )
}