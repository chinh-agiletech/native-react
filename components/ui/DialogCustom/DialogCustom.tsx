import React from "react";

interface DialogCustomProps {
  visible: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

const DialogCustom: React.FC<DialogCustomProps> = ({ visible, onClose, children }) => {
  if (!visible) return null; // ẩn dialog nếu visible=false

  return (
    <div style={styles.overlay}>
      <div style={styles.dialog}>
        <div style={styles.header}>
          <h2>Custom Dialog</h2>
          <button onClick={onClose} style={styles.closeBtn}>
            ✖
          </button>
        </div>
        <div style={styles.content}>{children}</div>
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  overlay: {
    position: "fixed",
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  dialog: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 8,
    minWidth: 300,
    width: "520px",
    maxWidth: "80%",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  closeBtn: {
    background: "transparent",
    border: "none",
    fontSize: 18,
    cursor: "pointer",
  },
  content: {
    marginTop: 10,
  },
};

export default DialogCustom;
