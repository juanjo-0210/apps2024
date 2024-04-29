import {useEffect, useState} from 'react';
import {getTasks} from '../service/hospital';
import {PersonalData} from '../common/types/personalData';
import {Table, Tr, Td} from './style';
import { Link } from 'react-router-dom';

const Read = () => {
 const [data,setData] = useState<PersonalData[]>([])
  useEffect(() => {
    getTasks('Persons').then(res => setData(res))
  },[])

  return (
    <div>
      <Table>
        <Tr>
          <Td>Id</Td>
          <Td>Name</Td>
          <Td>Date</Td>
        </Tr>
        {data.map((obj:PersonalData) => (
          <Tr>
            <Td><Link to={"/updatedelete/"+ obj.id}>{obj.id}</Link></Td>
            <Td>{obj.userName}</Td>
            <Td>{obj.date}</Td>
          </Tr>
      ))}
      </Table>
      </div>
  )
}

export default Read