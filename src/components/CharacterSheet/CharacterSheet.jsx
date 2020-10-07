import React from 'react';
import styles from './CharacterSheet.module.css'
import logo from "./justcyberpunklogo.png"

function CharacterSheet() {
  return (
    <div>
      <div className={styles.characterSheetContainer}>
        <div className={styles.topRow}>
          <div className={styles.logoContainer}>
            <img className={styles.logo} src={logo} alt=""/>
            <div className={styles.topLevelStats}>
                <div>
                  <div className={styles.cyberBorder}>
                    Handle
                    <div className={styles.statHolder}>
                      100
                    </div>
                  </div>
                </div>
                <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CharacterSheet;