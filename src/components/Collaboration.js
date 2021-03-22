import React from 'react';
import image from '../../public/images/image 8.png';

function Collaboration() {
  return(
    <div className='collaboration'>
        <h1 className='possibilities'>Immerse yourself in a world of possibilities</h1>
		<h2 className='technologies'>We use the latest technologies to create the most comfortable platform for finding business partners</h2>
		<h3 className='why'>Why</h3>
		<h4 className='community'>We believe in collaboration, transparency, and the power of information. Thus we united multiple national associations and prominent community members. We created the most thorough database of companies involved in the blockchain field. We added The VR Expo and conference. Bonus for participants of the Global Blockchain Network is an HR section where you can find a professional to scale up your team.</h4>
		<h3 className='title_2'>What is it</h3>
		<h4 className='subtitle_2'>What Easiest way to know «Who is Who in the Blockchain».</h4>
		<h3 className='title_3'>For whom</h3>
		<h4 className='subtitle_3'>Whether you are new to blockchain or already a prominent community member, you will find here partners, technologies, and implementation cases for any use. The Network is for everyone fascinated by technology.</h4>
		
		<div className='collaboration_img'>
			<img src={image}/>
		</div>
    </div>
	
	
  )
}

export default Collaboration;
