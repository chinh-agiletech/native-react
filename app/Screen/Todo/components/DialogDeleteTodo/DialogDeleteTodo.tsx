import Button from "@/components/ui/Button/Button";
import DialogCustom from "@/components/ui/DialogCustom/DialogCustom";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface DialogDeleteProps {
  isVisible: boolean;
  onClose: () => void;
  onDelete: () => void;
  onCancel?: () => void;
}

const DialogDelete = ({
  isVisible,
  onClose,
  onDelete,
  onCancel,
}: DialogDeleteProps) => {
  return (
    <DialogCustom visible={isVisible} onClose={onClose}>
      <View>
        <Text>Are you sure you want to delete this todo?</Text>
        <div className="">
          <Button title="Cancel" onPress={onCancel ?? (() => {})} />
          <Button title="Delete" onPress={onDelete} />
        </div>
      </View>
    </DialogCustom>
  );
};

export default DialogDelete;

const styles = StyleSheet.create({
  container: {
    maxWidth: 512,
    width: "100%",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 8,
  },
});