import { ButtonProps } from "@/types/type";
import { Text, TouchableOpacity } from "react-native";

function getBgVariantStyle(variant: ButtonProps["bgVariant"]) {
  switch (variant) {
    case "secondary":
      return "bg-gray-500";
    case "danger":
      return "bg-red-500";
    case "success":
      return "bg-green-500";
    case "outline":
      return "bg-transparent border-[0.5px] border-neutral-300";
    default:
      return "bg-[#0286ff]";
  }
}
function getTextVariantStyle(variant: ButtonProps["textVariant"]) {
  switch (variant) {
    case "primary":
      return "text-black ";
    case "secondary":
      return "text-gray-100";
    case "danger":
      return "text-red-100";
    case "success":
      return "bg-green-100";
    default:
      return "text-white";
  }
}

function CustomButton({
  onPress,
  title,
  bgVariant = "primary",
  textVariant = "default",
  IconLeft,
  IconRight,
  className,
  ...props
}: ButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`rounded-full flex flex-row justify-center items-center shadow-2xl shadow-neutral-500 ${getBgVariantStyle(bgVariant)} ${className} p-3`}
      {...props}
    >
      {IconLeft && <IconLeft />}
      <Text className={`text-lg font-bold ${getTextVariantStyle(textVariant)}`}>
        {title}
      </Text>
      {IconRight && <IconRight />}
    </TouchableOpacity>
  );
}

export default CustomButton;
