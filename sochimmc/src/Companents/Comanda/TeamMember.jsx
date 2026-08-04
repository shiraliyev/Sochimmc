import React from 'react';
import './Comanda.css';

function TeamMember({ member, showModal }) {
  return (
    <div className="team-member" onClick={() => showModal(member)}>
      <div className="member-photo">
        <img src={member.img} alt={member.name} />
      </div>
      <div className="member-info">
        <h3>{member.name}</h3>
        <p>{member.title}</p>
      </div>
    </div>
  );
}

export default TeamMember;
