import styles from "./Loading.module.css";

interface LoadingProps {
  text?: string;
}

const Loading: React.FC<LoadingProps> = ({ text = "Loading..." }) => {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.spinner}></div>
      <span>{text}</span>
    </div>
  );
};

export default Loading;