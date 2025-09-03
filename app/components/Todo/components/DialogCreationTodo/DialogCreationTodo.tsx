import { ThemedText } from "@/components/ThemedText";
import Button from "@/components/ui/Button/Button";
import CInput from "@/components/ui/CInput/CInput";
import DialogCustom from "@/components/ui/DialogCustom/DialogCustom";
import { FormikProvider, useFormik } from "formik";
import React from "react";
import { StyleSheet, View } from "react-native";
import * as Yup from "yup";

interface DialogCreationTodoProps {
  visible: boolean;
  onClose: () => void;
  onCreate: (title: string) => void;
}

function DialogCreationTodo({
  visible,
  onClose,
  onCreate,
}: DialogCreationTodoProps) {
  const formik = useFormik({
    initialValues: {
      title: "",
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Tên công việc là bắt buộc"),
    }),
    onSubmit: async (values, { resetForm }) => {
      onCreate(values.title);
      resetForm();
      onClose();
    },
  });

  const { errors, touched, isSubmitting, handleSubmit, handleChange, values } =
    formik;

  return (
    <DialogCustom visible={visible} onClose={onClose}>
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
              title={isSubmitting ? "Loading..." : "Create"}
              onPress={() => handleSubmit()}
              disabled={isSubmitting}
              style={{ maxWidth: 100, width: "100%" }}
            />
          </View>
        </FormikProvider>
      </View>
    </DialogCustom>
  );
}

export default DialogCreationTodo;

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
