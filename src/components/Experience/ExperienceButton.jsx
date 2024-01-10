const ExperienceButton = ({title, icon, onClick}) => {
  return (
    <button className='qualification-button' onClick={onClick}>
      <span> <i className='qualification-icon'>{icon}</i></span>
      <span>{title}</span>
    </button>
  )
}

export default ExperienceButton