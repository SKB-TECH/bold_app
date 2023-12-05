/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
//@ts-ignore
//@ts-nocheck
import { DataGrid} from '@mui/x-data-grid';
import { columnsnUser } from '../../constants';
import { useUserContext } from '../../contexts/UserContext';
import { useEffect } from 'react';

const ArticleViews = () => {
  //@ts-ignore
  const {users, allUsers, token}=useUserContext()


useEffect(() => {
  //@ts-ignore
  let send=true;
  allUsers(token);
  return () => {
    send=false
  }
},[])

  return (
    <div className='w-full'>
      <DataGrid columns={columnsnUser} rows={users} getRowId={(row)=>row?.idUser} className='bg-main-bg'/>
    </div>
  )
}

export default ArticleViews