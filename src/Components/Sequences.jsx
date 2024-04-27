import { useEffect } from 'react';
import Sequence from './Sequence';
import Sequence1 from './sequence1';

// eslint-disable-next-line react/prop-types
const Sequences = ({ images, loading }) => {
	return (
		<>
			<Sequence key={1} images={images} loading={loading} />
			{/* <div className='h-screen bg-blue-300'></div> */}
			{/* <Sequence1 key={2} images={images} /> */}
			{/* <div id='scrollDiv' className=' w-full h-2 bg-blue-800 '></div> */}
		</>
	);
};

export default Sequences;
