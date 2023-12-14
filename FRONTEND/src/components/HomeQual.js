import './homeQual.css';
import QualRowTwo from './QualRowTwo';
import QualRowOne from './QualRowOne';




function HomeQual() {
  return (
    <div style={{backgroundColor:"red"}}>
<div className='row qualrow1'>
<div className='row qualrow2'>
    <QualRowOne/>
</div>
<div className='row qualrow3'>
    <QualRowTwo/> </div>
</div>
   
</div>
  );
}

export default HomeQual;

