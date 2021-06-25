import logo from './logo.svg';
import './styles/App.css';
import './styles/reset.css';
import month from './month.json'
import {useState} from 'react'
import parse from 'html-react-parser';
const current = {
  backgroundColor: '#000000',
  color: '#fff'
}

function App() {

  const [months, setMounth] = useState(month)

  const handleMonth = (cur_month)=> {
    setMounth(months.map(item=> item.month==cur_month?{...item, isCurrent:true}:{...item, isCurrent: false}))
  }

  let Mois = ()=> months.map((items, id)=> <scroll-container key={id}> <scroll-page id={id} key={id} class="m-p relative mouth" style={items?.isCurrent?current:null} onClick={()=>handleMonth(items.month)}> <a href={`#${id}`}> {items.month} </a>  <div style={{display:items?.isCurrent?'block':'none'}} className="triangle-up"></div> </scroll-page> </scroll-container>  )
  
  const ContentText = ()=> {
    let current = months.find(item=> item.isCurrent)

    return <div style={{flex: 1}}>
        <h1 className="text-center title"> {current.contentTitle} </h1>
        <p className="text-center mt-5 description">{parse(current.content)}</p>
    </div>
  }
  
   return <body>
        <main>
          <container>
            <header>
              <section>
                    <div className="d-flex align-items-center justify-content-center relative tabs">
                      <div className="d-flex align-items-baseline mt w-auto tabs-base">
                          <Mois/>
                      </div>
                    </div>
                    <article className="d-flex align-items-center justify-content-center article">
                      <div className="d-flex contentText">
                        <ContentText/>
                      </div>
                    </article>
              </section>
            </header>
          </container>
        </main>
                
     </body>
}

export default App;
