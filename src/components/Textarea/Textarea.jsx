import React from "react";
import { Textarea } from "./style";
import { useTranslation } from "react-i18next";

export default function TextArea({ name, onChange, i18n, value }) {
  const { t } = useTranslation();
  return (
    <Textarea
      maxRows={4}
      aria-label="maximum height"
      placeholder={t("contactus.textarea")}
      name={name}
      value={value}
      onChange={onChange}
      sx={{
        "&::placeholder": {
          textAlign: i18n === "fa" ? "right" : "left",
        },
        textAlign: i18n === "fa" ? "right" : "left",
      }}
    />
  );
}
