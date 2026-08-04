import { 
  FaTools, FaHardHat, FaBuilding, FaShieldAlt, 
  FaLayerGroup, FaHandshake, FaProjectDiagram, FaCheckCircle 
} from 'react-icons/fa';

const Services01Data = (t) => [
  // 1. Dam və Hidroizolyasiya Quraşdırılması (Bikrost, Linokrom, Unifleks, Texnoelast, Stekloizol daxildir)
  { 
    id: 1, 
    category: t('cat_dam_hidro'), 
    title: t('title_rulon_dam_qur'), 
    description: t('desc_rulon_dam_qur'), 
    icon: <FaLayerGroup size={40} /> 
  },
  { 
    id: 2, 
    category: t('cat_dam_hidro'), 
    title: t('title_fundament_izolyasiya'), 
    description: t('desc_fundament_izolyasiya'), 
    icon: <FaShieldAlt size={40} /> 
  },
  { 
    id: 3, 
    category: t('cat_dam_hidro'), 
    title: t('title_maye_bitum_tetbiq'), 
    description: t('desc_maye_bitum_tetbiq'), 
    icon: <FaTools size={40} /> 
  },

  // 2. Fasad və İstilik İzolyasiya Montajı (Texnofas, Texnovent, İzoboks, Roklait, Carbon ECO daxildir)
  { 
    id: 4, 
    category: t('cat_fasad_istilik'), 
    title: t('title_das_yunu_montaj'), 
    description: t('desc_das_yunu_montaj'), 
    icon: <FaBuilding size={40} /> 
  },
  { 
    id: 5, 
    category: t('cat_fasad_istilik'), 
    title: t('title_vent_fasad_qur'), 
    description: t('desc_vent_fasad_qur'), 
    icon: <FaHardHat size={40} /> 
  },
  { 
    id: 6, 
    category: t('cat_fasad_istilik'), 
    title: t('title_ekstrusiya_doseme'), 
    description: t('desc_ekstrusiya_doseme'), 
    icon: <FaCheckCircle size={40} /> 
  },

  // 3. Peşəkar Partnyorluq və Mühəndislik Dəstəyi
  { 
    id: 7, 
    category: t('cat_partnyor_destek'), 
    title: t('title_birge_tikinti_partnyor'), 
    description: t('desc_birge_tikinti_partnyor'), 
    icon: <FaHandshake size={40} /> 
  },
  { 
    id: 8, 
    category: t('cat_partnyor_destek'), 
    title: t('title_texniki_nezaret_audit'), 
    description: t('desc_texniki_nezaret_audit'), 
    icon: <FaProjectDiagram size={40} /> 
  }
];

export default Services01Data;