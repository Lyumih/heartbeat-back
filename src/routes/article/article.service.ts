import { aql } from 'arangojs';
import { db } from '../../db'

export const getArticle = async () => {

  const cursor = await db.query(aql`
    FOR repo in Repo
    RETURN repo
  `);

  return await cursor.all()

}

export default { getArticle }