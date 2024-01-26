import { fetcher } from '@/app/_common/utils';

const fetchUserId = async (email: string): Promise<number | null> => {
  const url = `http://localhost:3000/api/v1/users?email=${encodeURIComponent(email)}`;
  
  try {
    const data = await fetcher(url);
    return data.user_id;
  } catch (error) {
    console.error('ユーザーIDの取得に失敗しました', error);
    throw error;
  }
};

export default fetchUserId;