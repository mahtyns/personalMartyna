import Button from '../../atoms/button/Button'
import SectionTitles from '../../molecules/header-subheader/SectionTitles'

const mainPageContact = (props) => {
  return (
      <div className='sectionContainer'>
        <div className='sectionWrapper contact'>
            <section id={'Contact'}>
                <SectionTitles sectionTitle={'Like what you see?'} sectionSubtitle={'Feel free to contact me'}/>
                    <a href='mailto:m.smolarek19@gmail.com'>
                        <Button variant={'dark'} content={'Message'} />
                    </a>  
            </section>
        </div>
    </div>
  )
}

export default mainPageContact