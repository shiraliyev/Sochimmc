const HTarifCardData = [
  {
    id: "1",
    name: "suizolyasiya_basliq",
    type: "cooling", // Su izolyasiyası üçün soyuq/mavi ton
    desc: "suizolyasiya_aciqlama",
    waMessage: "WA_MESSAGE_WATER_INSULATION" 
  },
  {
    id: "2",
    name: "istilikizolyasiya_basliq",
    type: "heating", // İstilik izolyasiyası üçün istilik/isti ton
    desc: "istilikizolyasiya_aciqlama",
    waMessage: "WA_MESSAGE_THERMAL_INSULATION"
  },
  {
    id: "3",
    name: "sesizolyasiya_basliq",
    type: "ventilation", // Səs izolyasiyası üçün neytral/bənövşəyi ton
    desc: "sesizolyasiya_aciqlama",
    waMessage: "WA_MESSAGE_SOUND_INSULATION"
  }
];

export default HTarifCardData;