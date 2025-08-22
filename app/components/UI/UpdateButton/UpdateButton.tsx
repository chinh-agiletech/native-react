import React from "react";
import { Pencil } from "lucide-react"; // icon edit
import Button from "../Button/Button";

interface UpdateButtonProps {
  onPress: () => void;
  disabled?: boolean;
  icon?: React.ReactNode;
}

const UpdateButton = ({ onPress, disabled, icon }: UpdateButtonProps) => {
  return (
    <div className="update-button">
      <Button
        title="Update"
        onPress={onPress}
        disabled={disabled}
        className="update-btn"
      >
        <span className="flex items-center gap-2">
          {icon || <Pencil size={16} />}
          <span>Update</span>
        </span>
      </Button>
    </div>
  );
};

export default UpdateButton;
