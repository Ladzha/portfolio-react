const WorkCard = ({title, subtitle, activities, year}) => {
  return (
    <div>
      <h3 className='qualification-title'>{title}</h3>
      <p className='qualification-subtitle bold-text'>{subtitle}</p>
      
      {activities.map((activity, index)=>
      <p key={index} className='qualification-detail'> <span className="circle"></span>{activity}</p>)}

      <div className="qualification-date">
        <span><i className='uil uil-calendar-alt calendar-icon'></i></span>
        <span className='year'>{year}</span>
      </div>  

    </div>
  )
}

export default WorkCard