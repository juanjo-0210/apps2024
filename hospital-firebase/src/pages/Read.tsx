import {useEffect, useState} from 'react';
import {getTasks} from '../service/hospital';
import {PersonalData} from '../common/types/personalData';
import {Table, Tr, Td} from './style';

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
            <Td>{obj.id}</Td>
            <Td>{obj.userName}</Td>
            <Td>Date</Td>
          </Tr>
      ))}
      </Table>
      </div>
  )
}

export default Read