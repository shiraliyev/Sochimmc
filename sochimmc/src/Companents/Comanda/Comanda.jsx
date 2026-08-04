import React, { useState } from 'react';
import './Comanda.css';
import { useTranslation } from 'react-i18next';

function Comanda() {
  const { t } = useTranslation();

  const [modalData, setModalData] = useState(null);

  const members = [
    { name: 'Ali Aliyev', title: 'CEO', description: 'Ali is the CEO with over 20 years of experience in the industry.', img: 'img/jeffbezosss.webp' },
    { name: 'Ferid Akhmadov', title: 'Bölmə rəhbəri', description: 'Ferid leads the department with innovative strategies and solutions.', img: 'img/jeffbezosss.webp' },
    { name: 'Arif Məmmədov', title: 'Baş Mühəndis', description: 'Arif is the chief engineer with a focus on cutting-edge technology.', img: 'img/jeffbezosss.webp' },
    { name: 'Faiq Əliyev', title: 'Baş Operator', description: 'Faiq oversees operations ensuring efficiency and effectiveness.', img: 'img/jeffbezosss.webp' }
  ];

  const showModal = (member) => {
    setModalData(member);
  };

  const closeModal = () => {
    setModalData(null);
  };

  return (
    <div className="KomandaApp">
      <div className="rehberlikbasliq"> 
        <h2 className="rehberlikbasliqh2">{t( 'shirketlernakomanda-rehberlik1')}</h2>
      </div>
      <section className="KomandaTeam-section">
        {members.map((member, index) => (
          <div key={index} className="KomandaTeam-member" onClick={() => showModal(member)}>
            <div className="KomandaMember-photo">
              <img src={member.img} alt={member.name} />
            </div>
            <div className="KomandaMember-info">
              <h3>{member.name}</h3>
              <p>{member.title}</p>
            </div>
          </div>
        ))}
      </section>
      {modalData && (
        <div id="KomandaModal" className="KomandaModal" onClick={closeModal}>
          <div className="KomandaModal-content" onClick={(e) => e.stopPropagation()}>
            <span className="KomandaClose" onClick={closeModal}>&times;</span>
            <h2 id="KomandaModal-name">{modalData.name}</h2>
            <p id="KomandaModal-title">{modalData.title}</p>
            <p id="KomandaModal-description">{modalData.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Comanda;
