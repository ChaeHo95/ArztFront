import axios from "axios";
import {react,useEffect,useState} from "react";
import {  React } from "react";
import { Container, Nav} from "react-bootstrap";
import Footer from "../Layout/Footer";



  
  
const Notice = () => {
  const [data, setData] = useState([]);

  useEffect(() =>{
    axios({
      url:"/board/show",
      method:"GET",
      baseURL: "http://localhost:8088",
    }).then((response) =>{
      setData(response.data)
      console.log(response.data)
    })
},[])

function addPadding(num){
  return num < 10 ? `0${num}` : num 
}

function getdate (date){
  const d = new Date(date)
  console.log(d.getFullYear(), d.getMonth()+1, d.getDate())
  console.log(d.getHours(), d.getMinutes(), d.getSeconds())

  return `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()} ${addPadding(d.getHours())}:${addPadding(d.getMinutes())}:${addPadding(d.getSeconds())}`

}
  return (
    <Container>
      <div style={{ textAlign: "center" }}>
        <article className="cf ph3 ph5-ns pv5">
           <table>
             <thead>               
                 <th width="5%" >번호</th>
                 <th width="">제목</th>
                 <th width="10%">작성자</th>
                 <th width="13%">작성일</th>                 
                 </thead>
                 <tbody>
               {data.length !== 0 && data.map(statement => {
                 const parsedDate = getdate(statement.date)
                 console.log('parsed date: ', parsedDate)
                 return(
                <tr>
                  <td style={{padding:"1%"}} href='location={}'>{statement.bno}</td>
                  <td>{statement.subject}</td>
                  <td>{statement.writer}</td>
                  <td>{parsedDate}</td>
                </tr> 
                 )
                 
                })}
               </tbody>           
                </table>
                <div className="btn">
                  <Nav.Link href="/Module/Writer"><button>글 작성</button></Nav.Link>
                </div>
          <div className="fn fl-ns w-50-ns">
            <p className="f5 lh-copy measure">
              <tr>
                <td>
                  
                </td>
              </tr>
            </p>
          </div>
        </article>
      </div>
      
      <Footer />
    </Container>
  );
};
export default Notice;
