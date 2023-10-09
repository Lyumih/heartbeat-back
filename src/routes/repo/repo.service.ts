import { aql } from 'arangojs';
import { db } from '../../db'

export const getRepo = async () => {

  const cursor = await db.query(aql`
    FOR repo in Repo
    RETURN repo
  `);

  return await cursor.all()

}

export default { getRepo }