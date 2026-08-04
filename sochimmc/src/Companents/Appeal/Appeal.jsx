import React from 'react'
import './css/Appeal.css'
import { useTranslation } from 'react-i18next';

function Appeal() {
  const { t } = useTranslation();

  return (
    <main class="muracietmain">
    <div class="kariyerdiv0111111">
        <img src="img/logonav.PNG" alt=""/> 
     </div>
    <section class="muracietmainsec2">
        <h2 class="muracietmainsec2h2">{t( 'shirketlernakomanda-muraciet1')}</h2>
            <a  className='buttonmuracieta' href="mailto:CV@asprof.az?subject=Vakansiya%20Müraciəti :"><button class="muracietetbutton">{t( 'shirketlernakomanda-muraciet2')}</button></a>
    </section>
    <div class="kariyerdiv0111111">
        <img src="img/logonav.PNG" alt=""/> 
     </div>
</main>
  )
}

export default Appeal