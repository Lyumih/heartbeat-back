import { aql } from 'arangojs';
import { db } from '../../db'

export const getBox = async () => {

  const cursor = await db.query(aql`
    FOR box in Box
    RETURN box
  `);

  return await cursor.all()

}