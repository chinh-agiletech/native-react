import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

interface DropdownProps {
  options: Array<{ label: string; value: string }>;
  onSelect: (value: string) => void;
  placeholder: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  onSelect,
  placeholder,
}) => {
  const [selectedValue, setSelectedValue] = React.useState<string | undefined>(undefined);
  const [open, setOpen] = React.useState(false);

  const handleSelect = (value: string) => {
    setSelectedValue(value);
    onSelect(value);
    setOpen(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.selector}
        onPress={() => setOpen((prev) => !prev)}
      >
        <Text style={styles.placeholder}>
          {selectedValue
            ? options.find((opt) => opt.value === selectedValue)?.label
            : placeholder}
        </Text>
      </TouchableOpacity>

      {open && (
        <View style={styles.dropdown}>
          {options.map((option) => (
            <TouchableOpacity
              key={option.value}
              onPress={() => handleSelect(option.value)}
            >
              <Text style={styles.option}>{option.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

export default Dropdown;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  selector: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    borderRadius: 8,
  },
  placeholder: {
    fontSize: 16,
    color: "#333",
  },
  dropdown: {
    marginTop: 5,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    backgroundColor: "#fff",
  },
  option: {
    padding: 12,
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
});
