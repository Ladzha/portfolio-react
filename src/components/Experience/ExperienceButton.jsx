const ExperienceButton = ({title, icon, isActive, onClick}) => {
  return (
    <button className={isActive ? 'qualification-button active-link' : 'qualification-button' } onClick={onClick}>
      <span> <i className='qualification-icon'>{icon}</i></span>
      <span>{title}</span>
    </button>
  )
}

export default ExperienceButton