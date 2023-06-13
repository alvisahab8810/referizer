import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout';

function App() {
  return (
    <div className="App">
     <Layout>
      {/* hero page */}
     <div className='bgimage'>
     <div className='container'>
      <p className='para1'>About us</p>
      <h1 className='head'>What we are <br/>and What we do</h1>
      <p className='para2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus <br/>quis eget viverra integer aliquam enim volutpat nisi, in.</p>
      </div>
     </div>
{/* secont section */}
     <div className='boox'>
      <div className='container'>
        <div className='mainboox2'>
          <div>
            <p className='para3'>Mission</p>
            <h1 className='head1'>Our Mission</h1>
            <p className='para4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas<br/> ipsum ut morbi feugiat ut egestas vulputate phasellus malesuada.<br/> Mauris dignissim et tellus enim diam sed.</p>
            <p className='para4'>Pellentesque id tellus, molestie non, imperdiet sed vitae nullam <br></br>odio. Morbi tellus, odio in duis quis lorem. Malesuada nisl sapien<br></br> gravida elementum ac, et placerat eu.</p>
          </div>
          <div>
            <img src='/images/side.png'/>
          </div>
        </div>
      </div>
     </div>
     {/* third section */}
     <div className='boox3'>
      <div className='container'>
<div>
  <p className='para5'>Numbers</p>
  <h2 className='head2'>Referrizer In Numbers</h2>
  <p className='para4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egesta ipsum ut morbi feugiat ut egestas vulputate phasellus malesuada.<br/> Mauris dignissim et tellus enim diam sed.</p>

</div>
<div className='mainboox3'>
  <div>
    <h2 className='head3'>2008</h2>
    <p className='para6'>Year Founded</p>
  </div>
  <div>
     <h2 className='head3'>150+</h2>
    <p className='para6'>Clients</p>
  </div>
  <div>
  <h2 className='head3'>90+</h2>
    <p className='para6'>Coutnries Served</p>
  </div>
  <div>
  <h2 className='head3'>100+</h2>
    <p className='para6'>Full-time Employees</p>
  </div>

</div>
      </div>
     </div>
     {/* third section */}

     <div className='boox5'>
      <div className='container'>
        <p></p>
        <h2>Our Values</h2>
        <div className='mainboox6'>
        <div>
          <h1 className='h1'>People first</h1>
          <p>Pellentesque id tellus, molestie non, imperdiet sed vitae nullam odio.  Malesuada nisl sapie gravida elementum ac, et placerat eu.</p>
        </div>
        <div>
        <h1 className='h1'>Customer-focused</h1>
          <p> Pellentesque id tellus, molestie non, imperdiet sed vitae nullam Morbi tellus, odio in duis quis lorem.</p>
        </div>
        <div>
        <h1 className='h1'>Transparancy</h1>
        <p> Pellentesque id tellus, molestie non, imperdiet sed vitae nullam Morbi tellus, odio in duis quis lorem.</p>

        </div>
      </div>
      </div>
   
     </div>
     {/* fourth section */}

     <div className='boox5'>
      <div className='container'>
      <div className='mainboox7'>
        <div className='text'>
          <p></p>
          <h2>Community That Has Impact</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
            <br></br>
      ipsum ut morbi feugiat ut egestas vulputate phasellus malesuada.
       <br></br>
      Mauris dignissim et tellus enim diam sed.</p>
    <br></br>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
  <br></br>
ipsum ut morbi feugiat ut egestas vulputate phasellus malesuada.
<br></br>
Mauris dignissim et tellus enim diam sed.</p>
        </div>
        <div>
        <img src='/images/1.png'/>
          
        </div>


      </div>
      </div>
     </div>
     </Layout>
    </div>
  );
}

export default App;
