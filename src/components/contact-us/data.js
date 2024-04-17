export const textFields = (inpInfo) => [
  {
    id: 1,
    label: "contactus.firstinput",
    name: "name",
    value: inpInfo.name,
    onChange: "name",
  },
  {
    id: 2,
    label: "contactus.seccondinput",
    name: "business_type",
    value: inpInfo.business_type,
    onChange: "business_type",
  },
  {
    id: 3,
    label: "contactus.thirdinput",
    name: "email",
    value: inpInfo.email,
    onChange: "email",
  },
  {
    id: 4,
    label: "contactus.forthinput",
    name: "phone_number",
    value: inpInfo.phone_number,
    onChange: "phone_number",
  },
];
