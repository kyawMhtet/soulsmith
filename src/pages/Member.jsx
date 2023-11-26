import React from 'react'
import { useParams } from 'react-router-dom'
import Member1 from '../components/Member1';
import NotFound from './NotFound';

const Member = () => {

    const params = useParams();


  return (
        <div>

        {
            params.id == 'member1' ? <Member1 /> : <NotFound />
        }
    </div>
  )
}

export default Member