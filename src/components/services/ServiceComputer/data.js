import animationData from "../../../assets/Animation - 1709306015453.json";
import animationData2 from "../../../assets/Animation - 1709306520883.json";
import animationData3 from "../../../assets/Animation - 1709306710507.json";
import animationData4 from "../../../assets/Animation - 1709308380133.json";
import animationData5 from "../../../assets/Animation - 1709307324898.json";
import {Trans} from "react-i18next"

export const services = [
  
  {
    id: 1,
    title:" توسعه و برنامه نویسی",
    servicesnumber:"servicesFirst",
    servicesTitle:"servicesTitle1",
    desc: "برنامه نویسی ایده ی مدنظر شما با بهره گیری از بروزترین تکنولوژی های موجود",
    img: animationData,
    width:"80%",

    content: [
      { subcontent: "سیستم های انبارداری و مالی",ServicesContentPart:"ServicesContentPart.part1" },
      { subcontent: "توسعه ی انواع نرم افزار ها و برنامه های تحت وب" ,ServicesContentPart:"ServicesContentPart.part2"},
      { subcontent: "طراحی فروشگاه های آنلاین" ,ServicesContentPart:"ServicesContentPart.part3"},
    ],
  },

  {
    id: 2,
    title: "  سئو وبسایت",
    desc: "سئو یا همان بالا اوردن لینک وبسایت شما در موتور های جستجو تاثیر چشم گیری در دیده شدن کسب و کار شما ایفا میکند",
    img: animationData2,
    servicesTitle:"servicesTitle2",
    servicesnumber:"servicesSeccond",
    width:"68%",
    content: [
      { subcontent: "بالا اوردن لینک وبسایت ",ServicesContentPart:"ServicesContentPart.part4" },
      { subcontent: "فراگیری جدیدترین الگوریتم های گوگل " ,ServicesContentPart:"ServicesContentPart.part5"},
    ],
  },

  {
    id: 4,
    title: "پشتیبانی وبسایت",
    desc: "با توجه به توافق انجام شده در قرارداد تیم ما از محصول مربوطه تا مدت زمان تعیین شده پشتیبانی به عمل می آورد",
    img: animationData4,
    servicesTitle:"servicesTitle3",
    servicesnumber:"servicesThird",
    width:"70%",
    content: [
      { subcontent: "رفع هرگونه خطا و باگ" ,ServicesContentPart:"ServicesContentPart.part6"},
      {
        subcontent: "آموزش کامل استفاده و مدیریت اپلیکیشن مربوطه به کارفرما",
        ServicesContentPart:"ServicesContentPart.part7"},
    ],
  },
  {
    id: 3,
    title: "تولید محتوا",
    desc: "   تولید محتوا در راستای کسب و کار شما برای همسو شدن با بازار",
    img: animationData3,
    servicesTitle:"servicesTitle4",
    servicesnumber:"servicesForth",
    width:"80%",
    content: [
      { subcontent: "تیم تولید محتوای حرفه ای و متخصص" ,ServicesContentPart:"ServicesContentPart.part8"},
      { subcontent: "تولید محتوای مختص به کسب و کار شما" ,ServicesContentPart:"ServicesContentPart.part9"},
    ],
  },

  {
    id: 5,
    title: "مشاوره رایگان",
    desc: "قبل از شروع کار مشاوره کامل و جامعی به کارفرما ارائه میشود تا با اطمینان کامل محصول مورد نیازش را انتخاب کند",
    img: animationData5,
    servicesTitle:"servicesTitle5",
    width:"70%",
    servicesnumber:"servicesFifth",
    content: [
      { subcontent: "ارائه تمام نکات لازم برای انتخاب محصول",ServicesContentPart:"ServicesContentPart.part10" },
      { subcontent: "راهنمایی کارفرما در طول مسیر" ,ServicesContentPart:"ServicesContentPart.part11"},
    ],
  },
];
