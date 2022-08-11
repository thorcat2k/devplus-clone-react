import'./Campus.css'
const  dataCampus=[
  {
    img:'https://devplus.edu.vn/assets/images/devplus/One_plus.png',
    item:'One plus (+) Programing foundation'
  },
  {
    img:'https://devplus.edu.vn/assets/images/devplus/Two_plus.png',
    item:'Two plus (++) Skill up to to get ready'
  },
  {
    img:'https://devplus.edu.vn/assets/images/devplus/Three_plus.png',
    item:'Three plus (+++) How to become a senior'

  }
]
function Campus(){
    return(
        <section className="our-campus">
        <div className="content-campus">
          <div className="campus-container">
            <div className="campus-heading">
              <h2>Our main campus</h2>
            </div>
            <div className="campus-row">
                 {dataCampus.map((title,index)=>(

                  <div className="campus-cover fade up" key={index}>
                  <div className="campus-size">
                    <div className="campus-img">
                      <img src={title.img} alt="one plus"/>
                    </div>
                     <div className="campus-title">
                      <h3>{title.item}</h3>
                    </div>
                  </div>
                </div> 
                 ))}
            </div>
          </div> 
        </div>
      </section>
    )
}
export default Campus;