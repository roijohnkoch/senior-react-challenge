import React, { useEffect, useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchUserById } from "@/lib/api";
import Loading from "./Loading";
import styles from "./Modal.module.css";

interface ModalProps {
  userId: number | null;
  onClose: () => void;
  isOpen: boolean;
}

const Modal: React.FC<ModalProps> = ({ userId, onClose, isOpen }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const { data: user, isLoading } = useQuery({
    queryKey: ["user", userId],
    queryFn: () => fetchUserById(userId!),
    enabled: userId !== null,
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  if (!isOpen) return null;
  
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent} ref={modalRef}>
        {isLoading ? <Loading text="Loading user details..." /> : (
          <>
            <h2 className={styles.modalHeader}>
              {user?.firstName} {user?.lastName}
            </h2>
            <div className={styles.modalRow}>Email: {user?.email}</div>
            <div className={styles.modalRow}>Phone: {user?.phone || "-"}</div>
            <div className={styles.modalRow}>Company: {user?.company?.name || "-"}</div>
            <div className={styles.modalRow}>Address: {user?.address?.address || "-"}</div>
        
            <button className={styles.closeButton} onClick={onClose}>
              Close
            </button>
           
          </>
        )}
      </div>
    </div>
  );
}

export default Modal;