import React from 'react';
import { 
  FaCalculator, FaDraftingCompass, FaClipboardCheck, 
  FaShieldAlt, FaProjectDiagram, FaFileInvoiceDollar,
  FaTools, FaLayerGroup, FaBuilding 
} from 'react-icons/fa';

const Services02Data = [
  // Kateqoriya 1: Material Seçimi və Konsultasiya (3 ədəd)
  {
    id: 1,
    category: "cat_material_secimi",
    title: "title_dogru_material",
    description: "desc_dogru_material",
    icon: <FaShieldAlt size={40} />
  },
  {
    id: 2,
    category: "cat_material_secimi",
    title: "title_texniki_meslehet",
    description: "desc_texniki_meslehet",
    icon: <FaDraftingCompass size={40} />
  },
  {
    id: 3,
    category: "cat_material_secimi",
    title: "title_sertifikat_analiz",
    description: "desc_sertifikat_analiz",
    icon: <FaLayerGroup size={40} />
  },

  // Kateqoriya 2: Sərfiyyat və Büdcə Hesablaması (3 ədəd)
  {
    id: 4,
    category: "cat_serfiyyat_hesab",
    title: "title_metraj_hesab",
    description: "desc_metraj_hesab",
    icon: <FaCalculator size={40} />
  },
  {
    id: 5,
    category: "cat_serfiyyat_hesab",
    title: "title_budce_optimizasiya",
    description: "desc_budce_optimizasiya",
    icon: <FaFileInvoiceDollar size={40} />
  },
  {
    id: 6,
    category: "cat_serfiyyat_hesab",
    title: "title_material_smeta",
    description: "desc_material_smeta",
    icon: <FaTools size={40} />
  },

  // Kateqoriya 3: Layihə və Qiymətləndirmə (3 ədəd)
  {
    id: 7,
    category: "cat_layihe_qiymet",
    title: "title_ilkin_qiymet",
    description: "desc_ilkin_qiymet",
    icon: <FaProjectDiagram size={40} />
  },
  {
    id: 8,
    category: "cat_layihe_qiymet",
    title: "title_standart_uygunluq",
    description: "desc_standart_uygunluq",
    icon: <FaClipboardCheck size={40} />
  },
  {
    id: 9,
    category: "cat_layihe_qiymet",
    title: "title_obyekt_qiymetlendirme",
    description: "desc_obyekt_qiymetlendirme",
    icon: <FaBuilding size={40} />
  }
];

export default Services02Data;