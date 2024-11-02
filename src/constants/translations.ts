import { TranslationKey, TranslationValue } from "@/types/language";

// Define your translations
export const translations: Record<
  "EN" | "TH",
  Record<TranslationKey, TranslationValue>
> = {
  EN: {
    home: "next",
    welcome: "tap to play",
    signUp: {
      title: "It's me !",
      name: "name",
      email: "email",
      phone: "phone",
      btn: "next",
    },
    termsCondition: {
      description: `Schweppes จะทำการเก็บรวบรวม ใช้ หรือเปิดเผยข้อมูลของท่านต่อ บริษัท Box Exhibit เพื่อการเข้าร่วมและเข้าร่วมกิจกรรมกับนิทรรศการ์ ไฟกลางกรุง Awakening 2024 \n Schweppes will process your data a for the purpose relating to Awakening 2024`,
      label: "I agree with the Terms and Conditions",
      btn: "next",
    },
    start: {
      title: "your name",
      btn: "next",
    },
    scene: {
      title: "Please select your background \n to project onto the sphere.",
      btn: "next",
    },
  },
  TH: {
    home: "เริ่มเลย",
    welcome: "ถัดไป",
    signUp: {
      title: "และนี่คือฉัน !",
      name: "ชื่อ",
      email: "อีเมล",
      phone: "เบอร์โทรศัพท์",
      btn: "ถัดไป",
    },
    termsCondition: {
      description: `Schweppes จะทำการเก็บรวบรวม ใช้ หรือเปิดเผยข้อมูลของท่านต่อ บริษัท Box Exhibit เพื่อการเข้าร่วมและเข้าร่วมกิจกรรมกับนิทรรศการ์ ไฟกลางกรุง Awakening 2024 \n Schweppes will process your data a for the purpose relating to Awakening 2024`,
      label: "อนุญาติให้เข้าถึงข้อและเผยเเพร่มูลของคุณ",
      btn: "ถัดไป",
    },
    start: {
      title: "ชื่อของคุณคือ ...",
      btn: "ถัดไป",
    },
    scene: {
      title: "กรุณาเลือกพื้นหลังที่จะถูกฉายขึ้น \n ลูกบอลของคุณ !",
      btn: "next",
    },
  },
};
