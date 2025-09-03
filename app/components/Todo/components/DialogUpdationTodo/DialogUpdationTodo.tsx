import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Button from "@/app/components/UI/Button/Button";
import DialogCustom from "@/app/components/UI/DialogCustom/DialogCustom";
import CInput from "@/app/components/UI/CInput/CInput";
import { ThemedText } from "@/components/ThemedText";
import { FormikProvider, useFormik } from "formik";
import * as Yup from "yup";

interface DialogUpdateTodoProps {
  isVisible: boolean;
  onClose: () => void;
  onUpdate: () => void;
  onCancel?: () => void;
}

const DialogUpdateTodo = ({
  isVisible,
  onClose,
  onUpdate,
  onCancel,
}: DialogUpdateTodoProps) => {
  const formik = useFormik({
    initialValues: {
      title: "",
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Tên công việc là bắt buộc"),
    }),
    onSubmit: async (values, { resetForm }) => {
      onUpdate();
      resetForm();
      onClose();
    },
  });
  const handleUpdate = () => {
    formik.handleSubmit();
  };
  const { errors, touched, isSubmitting, handleSubmit, handleChange, values } =
    formik;
  return (
    <DialogCustom visible={isVisible} onClose={onClose}>
      <ThemedText style={{ fontSize: 15, marginBottom: 10 }}>
        Tạo công việc mới
      </ThemedText>
      <View>
        <FormikProvider value={formik}>
          <View style={styles.container}>
            <CInput
              types="text"
              placeholder="Nhập tên công việc"
              value={values.title}
              onChange={handleChange("title")}
            />
            {touched.title && errors.title && (
              <ThemedText style={{ color: "red", marginTop: 5 }}>
                {errors.title}
              </ThemedText>
            )}
          </View>
          <View style={styles.buttonContainer}>
            <Button
              title={isSubmitting ? "Loading..." : "Update"}
              onPress={() => handleSubmit()}
              disabled={isSubmitting}
              style={{ maxWidth: 100, width: "100%" }}
            />
          </View>
        </FormikProvider>
      </View>
    </DialogCustom>
  );
};

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
