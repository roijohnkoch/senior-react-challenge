import React from "react";
import styles from "./Error.module.css";

interface ErrorProps {
  onRetry: () => void;
  message?: string;
}

const Error: React.FC<ErrorProps> = ({
  onRetry,
  message = "Something went wrong. Please try again.",
}) => {
  return (
    <div className={styles.errorContainer}>
      <p className={styles.errorMessage}>{message}</p>
      <button
        className={styles.retryButton}
        onClick={onRetry}
      >
        Retry
      </button>
    </div>
  );
};

export default Error;