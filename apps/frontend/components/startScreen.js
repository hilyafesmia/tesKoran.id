import styles from "./startScreen.module.css";
import cn from "classnames";
import { ACTIONS, MODE, TYPE } from "../utils/constants.js";
import { useWindowWideMin } from "../utils/customHooks.js";
import StartMenu from "../components/startMenu.js";

export default function StartScreen({
  gameMode,
  gameDuration,
  gameType,
  dispatch,
}) {
  function useGetBackKey() {
    if (useWindowWideMin(600))
      return <span className={styles.codeText}>{"<"}</span>;
    return (
      <>
        <span className={styles.codeText}>Backspace</span>/
        <span className={styles.codeText}>
          {gameType == TYPE.PAULI ? "ArrowUp" : "ArrowDown"}
        </span>
      </>
    );
  }

  function useGetForwardKey() {
    if (useWindowWideMin(600))
      return <span className={styles.codeText}>{">"}</span>;
    return (
      <>
        <span className={styles.codeText}>Enter</span>/
        <span className={styles.codeText}>
          {gameType == TYPE.PAULI ? "ArrowDown" : "ArrowUp"}
        </span>
      </>
    );
  }

  const isCustom =
    gameDuration != 30 &&
    gameDuration != 180 &&
    gameDuration != 1200 &&
    gameDuration != 3600;

  return (
    <div className={styles.container}>
      {/* <div className={styles.paddingText} /> */}
      <div className={styles.menuContainer}>
        <div className={styles.menuRow}>
          <div className={styles.menuHeader}>Mode</div>
          <div className={styles.menuChoice}>
            <StartMenu
              className={cn([styles.clickable], {
                [styles.activeChoice]: gameMode == MODE.PRACTICE,
              })}
              onClick={() =>
                dispatch({ type: ACTIONS.SET_MODE, payload: MODE.PRACTICE })
              }
              title="Latihan"
            />
            <StartMenu
              className={cn([styles.clickable], {
                [styles.activeChoice]: gameMode == MODE.RANKED,
              })}
              onClick={() => {
                dispatch({ type: ACTIONS.SET_MODE, payload: MODE.RANKED });
                if (isCustom) dispatch({ type: ACTIONS.SET_TIME, payload: 60 });
              }}
              title="Kompetisi"
            />
          </div>
        </div>
        <div className={styles.menuRow}>
          <div className={styles.menuHeader}>Tipe</div>
          <div className={styles.menuChoice}>
            <StartMenu
              className={cn([styles.clickable], {
                [styles.activeChoice]: gameType == TYPE.PAULI,
              })}
              onClick={() =>
                dispatch({ type: ACTIONS.SET_TYPE, payload: TYPE.PAULI })
              }
              title="Pauli"
            />
            <StartMenu
              className={cn([styles.clickable], {
                [styles.activeChoice]: gameType == TYPE.KRAEPELIN,
              })}
              onClick={() => {
                dispatch({ type: ACTIONS.SET_TYPE, payload: TYPE.KRAEPELIN });
              }}
              title={"Kraepelin"}
            />
          </div>
        </div>
        <div className={styles.menuRow}>
          <div className={styles.menuHeader}>Durasi</div>
          <div className={cn([styles.menuChoice], [styles.horizontalScroll])}>
            <StartMenu
              className={cn([styles.clickable], {
                [styles.activeChoice]: gameDuration == 30,
              })}
              onClick={() => dispatch({ type: ACTIONS.SET_TIME, payload: 30 })}
              title="30d"
            />
            <StartMenu
              className={cn([styles.clickable], {
                [styles.activeChoice]: gameDuration == 180,
              })}
              onClick={() => dispatch({ type: ACTIONS.SET_TIME, payload: 180 })}
              title="3m"
            />
            <StartMenu
              className={cn([styles.clickable], {
                [styles.activeChoice]: gameDuration == 1200,
              })}
              onClick={() =>
                dispatch({ type: ACTIONS.SET_TIME, payload: 1200 })
              }
              title="20m"
            />
            <StartMenu
              className={cn([styles.clickable], {
                [styles.activeChoice]: gameDuration == 3600,
              })}
              onClick={() =>
                dispatch({ type: ACTIONS.SET_TIME, payload: 3600 })
              }
              title="60m"
            />
            <StartMenu
              className={cn({
                [styles.clickable]: gameMode == MODE.PRACTICE,
                [styles.strikethrough]: gameMode == MODE.RANKED,
                [styles.activeChoice]: isCustom,
              })}
              onClick={(e) => {
                if (gameMode == MODE.RANKED) return;

                const customSecond = parseInt(
                  prompt(
                    "Masukkan durasi dalam detik\n(cth: ketik 60 jika ingin durasi 1 menit)"
                  )
                );
                if (!customSecond) return;
                dispatch({ type: ACTIONS.SET_TIME, payload: customSecond });
              }}
              title="Custom"
            />
          </div>
        </div>
        <div className={styles.horizontalSep} />
        <div
          className={cn([styles.startButton])}
          onClick={() => dispatch({ type: ACTIONS.INIT_GAME })}
        >
          Mulai
        </div>
      </div>
      <div className={styles.explanationText}>
        <div>
          Tambahkan angka-angka dari{" "}
          {gameType == TYPE.PAULI ? <u>atas ke bawah</u> : <u>bawah ke atas</u>}{" "}
          dan hanya ketik <b>digit terakhir</b> dari hasilnya.
        </div>
        <div>
          Tekan {useGetBackKey()} untuk menavigasi mundur dan{" "}
          {useGetForwardKey()} untuk menavigasi maju.
        </div>
        <div>Cukup ganti jawaban Anda jika Anda membuat kesalahan.</div>
      </div>
    </div>
  );
}
