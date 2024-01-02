import { UilCalendarAlt } from '@iconscout/react-unicons';

const WorkCard = ({title, subtitle, activities, year}) => {
  return (
    <div>
      <h3 className='qualification-title'>{title}</h3>
      <span className='qualification-subtitle bold-text'>{subtitle}</span>
      
      {activities.map((activity)=>
      <p className='qualification-subtitle'>{activity}</p>)}

      <div className="qualification-date">
        <span><i className='calendar-icon'><UilCalendarAlt/></i></span>
        
        <span className='year'>{year}</span>
      </div>  

    </div>
  )
}

export default WorkCard