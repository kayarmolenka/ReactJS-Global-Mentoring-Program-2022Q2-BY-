import { Provider } from 'react-redux';
import { store } from '../src/store';
import { useRouter } from 'next/router';
import { Suspense, lazy, useEffect, useState } from 'react';

const AppLazy = lazy(() => import('../src/components/App/App'));

const Search = () => {
  const router = useRouter();
  const { title } = router.query;
  console.log(title);

  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }

  return (
    <Provider store={store}>
      <Suspense fallback={<div>Loading...</div>}>
        <AppLazy />
      </Suspense>
    </Provider>
  );
};

export default Search;
