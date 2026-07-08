
"use client";
import styles from "./styles/AppButton.module.css";

interface AppButtonProps{
    buttonText : String;
    onClick : React.MouseEventHandler<HTMLButtonElement>;
}

export default function AppButton({buttonText, onClick} : AppButtonProps) {
    return (
        <button type="submit" className={styles.submitButton} onClick={onClick}>
            {buttonText}
        </button>
    );
}